import * as React from 'react';

export const createWorkerFile = (fn: (...arg: any[]) => unknown) => {
  const jsCode = `
   const fn = ${fn.toString()};
   self.addEventListener('message', (event) => {
    if (event.data) {
      const result = fn(...event.data);
      if(result instanceof Promise) {
        result.then((res) => postMessage(res))
      } else {
        postMessage(result);
      }
    }
  });
`;
  const blob = new Blob([jsCode], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  return url;
};

export enum STATUS {
  LOADING = 'loading',
  IDLE = 'idle',
}

type UseWorkerReturnProps<T> = {
  status: STATUS;
  terminate: () => void;
  workerHandler: (...arg: any[]) => Promise<T>;
};
export function useWorker<T>(
  fn: (...arg: any[]) => T
): UseWorkerReturnProps<T> {
  const [status, setStatus] = React.useState<STATUS>(STATUS.IDLE);
  const workerRef = React.useRef<Worker>(null);

  const workerHandler = React.useCallback((...arg: any[]) => {
    setStatus(STATUS.LOADING);
    workerRef.current.postMessage(arg);
    return new Promise<T>((resolve) => {
      workerRef.current.onmessage = (event) => {
        setStatus(STATUS.IDLE);
        resolve(event.data);
      };
    });
  }, []);
  const terminate = React.useCallback(() => workerRef.current.terminate(), []);
  React.useEffect(() => {
    if (typeof fn === 'function') {
      workerRef.current = new Worker(createWorkerFile(fn));
    }
  }, [fn.toString()]);

  return { status, workerHandler, terminate };
}
export default useWorker;

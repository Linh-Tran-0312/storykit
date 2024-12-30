export declare const createWorkerFile: (fn: (...arg: any[]) => unknown) => string;
export declare enum STATUS {
    LOADING = "loading",
    IDLE = "idle"
}
type UseWorkerReturnProps<T> = {
    status: STATUS;
    terminate: () => void;
    workerHandler: (...arg: any[]) => Promise<T>;
};
export declare function useWorker<T>(fn: (...arg: any[]) => T): UseWorkerReturnProps<T>;
export default useWorker;

import { renderHook } from '@testing-library/react';
import useWorker, { createWorkerFile, STATUS } from './useWorker';
// The problem comes from the Blob issue in JSDom which Jest uses under the hood as an environment when running your tests.
// JSDom's Blob implementation has no support for text, stream and arrayBuffer methods.
// https://stackoverflow.com/questions/65328150/text-method-not-available-in-blob
import { Blob as BlobPolyfill } from 'node:buffer';
import { act } from 'react';

const originalCreateObjectURL = global.URL.createObjectURL;
const originalBlob = global.Blob;
const originalWorker = global.Worker;
describe('useWorker module', () => {
  afterEach(() => {
    global.URL.createObjectURL = originalCreateObjectURL;
    global.Blob = originalBlob;
    global.Worker = originalWorker;
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('createWorkerFile function should create a Blob file of js code and return its URL', () => {
    const startHeavyTask = () => {
      return 'Heavy Data';
    };
    const mockedBlobURL = 'mockedBlobURL';
    global.URL.createObjectURL = jest.fn(() => mockedBlobURL);
    global.Blob = BlobPolyfill as any;

    const url = createWorkerFile(startHeavyTask);
    expect(URL.createObjectURL).toHaveBeenCalled();
    const blobFile = (URL.createObjectURL as jest.Mock).mock.calls[0][0];
    expect(blobFile).toBeInstanceOf(Blob);
    expect(url).toBe(mockedBlobURL);

    const blobContent = blobFile.text();
    blobContent.then((text) => {
      expect(text).toContain(startHeavyTask.toString());
    });
  });

  it('should work correctly', async () => {
    const mockWorkerFile = 'mockedWorkerFile.js';
    const mockedCreateWorkerFile = jest
      .spyOn(require('./useWorker'), 'createWorkerFile')
      .mockImplementation(() => {
        return mockWorkerFile;
      });

    const mockWorker = {
      terminate: jest.fn(),
      postMessage: jest.fn(),
      onmessage: jest.fn(),
    };

    global.Worker = jest.fn((_url: string) => mockWorker) as any;

    const a = 2;
    const b = 5;
    const heavySum = (x: number, y: number) => x + y;

    const { result } = renderHook(() => useWorker(heavySum));

    const workerHandler = result.current.workerHandler;
    const terminate = result.current.terminate;

    expect(global.Worker).toHaveBeenCalledWith(mockWorkerFile);
    expect(mockedCreateWorkerFile).toHaveBeenCalledTimes(1);

    expect(result.current.status).toBe(STATUS.IDLE);

    let promiseSum: Promise<number>;

    act(() => {
      promiseSum = workerHandler(a, b);
    });
    expect(result.current.status).toBe(STATUS.LOADING);

    let sum;
    await act(async () => {
      mockWorker.onmessage({ data: a + b });
      sum = await promiseSum;
    });
    expect(sum).toBe(a + b);
    expect(result.current.status).toBe(STATUS.IDLE);
    expect(mockWorker.postMessage.mock.calls[0][0][0]).toBe(a);
    expect(mockWorker.postMessage.mock.calls[0][0][1]).toBe(b);

    act(() => {
      terminate();
    });
    expect(mockWorker.terminate).toHaveBeenCalledTimes(1);
  });
});

import useWorker, { createWorkerFile } from './useWorker';
// The problem comes from the Blob issue in JSDom which Jest uses under the hood as an environment when running your tests.
// JSDom's Blob implementation has no support for text, stream and arrayBuffer methods.
// https://stackoverflow.com/questions/65328150/text-method-not-available-in-blob
import { Blob as BlobPolyfill } from 'node:buffer';

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

  const startHeavyTask = () => {
    return 'Heavy Data';
  };
  it('createWorkerFile function should create a Blob file of js code and return its URL', () => {
    global.URL.createObjectURL = jest.fn(() => 'mockedBlobURL');
    global.Blob = BlobPolyfill as any;
    global.Worker = jest.fn().mockImplementation(() => ({
      postMessage: jest.fn(),
      terminate: jest.fn(),
      onmessage: null,
      onerror: null,
    }));

    const url = createWorkerFile(startHeavyTask);
    expect(URL.createObjectURL).toHaveBeenCalled();
    // @ts-ignore
    const blobFile = URL.createObjectURL.mock.calls[0][0];
    expect(blobFile).toBeInstanceOf(Blob);
    expect(url).toBe('mockedBlobURL');

    const blobContent = blobFile.text();
    blobContent.then((text) => {
      expect(text).toContain('startHeavyTask');
      expect(text).toContain('const res = startHeavyTask()');
      expect(text).toContain('postMessage(res)');
    });
  });

  it('useWorker: worker instance should work correctly', async () => {
    const mockWorkerFile = 'mockedWorkerFile.js';
    const a = jest
      .spyOn(require('./useWorker'), 'createWorkerFile')
      .mockImplementation(() => {
        console.log('sawdcsad');
        return mockWorkerFile;
      });

    const mockEvent: MessageEvent<{ data: string }> = new MessageEvent(
      'mockEventData'
    );
    const mockOnmessage = jest.fn((event) => {
      return event.data;
    });
    class MockWorker {
      public terminate: jest.Mock;
      public postMessage: jest.Mock;
      public onmessage: typeof mockOnmessage;
      constructor(url: string) {
        this.terminate = jest.fn();
        (this.postMessage = jest.fn()),
          (this.onmessage = mockOnmessage),
          this.onmessage(mockEvent);
      }
    }
    global.Worker = MockWorker as any;

    // Run the useWorker function
    const promise = useWorker(startHeavyTask);
    // Check the worker instance created with response of mock createWorkerFile fn: mockedWorkerFile
    await expect(global.Worker).toHaveBeenCalledWith(mockWorkerFile);

    // Check onmessage was called with mockEvent data
    expect(mockOnmessage).toHaveBeenCalledWith(mockEvent);

    // Check useWorker return a promise
    expect(promise).toBeInstanceOf(Promise);
  });
});

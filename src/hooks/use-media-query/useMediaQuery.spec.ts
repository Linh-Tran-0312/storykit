import { renderHook, act } from '@testing-library/react';
import useMediaQuery from './useMediaQuery';

describe('useMediaQuery module', () => {
  let matchMediaMock: jest.Mock;

  beforeEach(() => {
    matchMediaMock = jest.fn();
    window.matchMedia = matchMediaMock;
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should return true when the media query matches', () => {
    const mockedMatches = true;
    matchMediaMock.mockImplementation((media: string) => ({
      matches: mockedMatches,
      media,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));
    const { result } = renderHook(() => useMediaQuery('(max-width: 600px)'));
    expect(result.current).toBe(true);
  });

  it('should return true when there is an event change triggered', () => {
    let handleChangeMock = jest.fn();
    matchMediaMock.mockImplementation((media: string) => ({
      matches: false,
      media,
      removeEventListener: jest.fn(),
      addEventListener: jest.fn().mockImplementation((event, handleChange) => {
        if (event === 'change') {
          handleChangeMock = handleChange;
        }
      }),
    }));
    const { result } = renderHook((query: string) => useMediaQuery(query));
    act(() => {
      handleChangeMock({ matches: true });
    });
    expect(result.current).toBe(true);
  });
});

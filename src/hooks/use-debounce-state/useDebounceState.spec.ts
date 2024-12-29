import { renderHook, act, RenderHookResult } from '@testing-library/react';
import useDebounceState from './useDebounceState';

jest.useFakeTimers();

describe('useDebounceState module', () => {
  type RenderHookResultProps = RenderHookResult<
    ReturnType<typeof useDebounceState<string>>,
    string
  >;
  let result: RenderHookResultProps['result'];
  const debounceTime = 1000;
  const initialState = 'initialState';
  const updatedState = 'updatedState';

  beforeEach(() => {
    const hook = renderHook(() =>
      useDebounceState<string>(initialState, debounceTime)
    );
    result = hook.result;
  });

  it('should return initial state for state and debounced state', () => {
    expect(result.current.state).toBe(initialState);
    expect(result.current.debouncedState).toBe(initialState);
  });

  it('should return updated state for state and initial state for debounced state within debounce time ', () => {
    act(() => {
      result.current.setState(updatedState);
    });
    expect(result.current.state).toBe(updatedState);
    expect(result.current.debouncedState).toBe(initialState);
  });

  it('should return updated state for state and debouncedState after debounce time ', () => {
    act(() => {
      result.current.setState(updatedState);
    });
    act(() => {
      jest.advanceTimersByTime(debounceTime);
    });
    expect(result.current.state).toBe(updatedState);
    expect(result.current.debouncedState).toBe(updatedState);
  });
});

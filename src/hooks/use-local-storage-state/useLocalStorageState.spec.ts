import { renderHook, act } from '@testing-library/react';
import useLocalStorageState, { getItem } from './useLocalStorageState';

describe('useLocalStorageState hook', () => {
  let result: { current: [string, (value: string) => void] };
  const item = 'testItem';
  const itemValue = 'testValue';
  const newValue = 'newValue';

  beforeEach(() => {
    localStorage.setItem(item, JSON.stringify(itemValue));
    const hook = renderHook(
      (key: string) => useLocalStorageState<string>(key),
      { initialProps: item }
    );
    result = hook.result;
  });

  it('should get the existing value of the local item', () => {
    expect(result.current[0]).toBe(itemValue);
  });

  it('should change the value of the local item', async () => {
    act(() => {
      result.current[1](newValue);
    });
    const localItem = JSON.parse(localStorage.getItem(item));
    expect(localItem).toBe(newValue);
  });

  it('should change the value of the state', async () => {
    act(() => {
      result.current[1](newValue);
    });
    expect(result.current[0]).toBe(newValue);
  });

  it('getItem util should return the value of the local item', () => {
    const value = getItem(item);
    expect(value).toBe(itemValue);
  });
});

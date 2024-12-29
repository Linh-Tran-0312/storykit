import { renderHook, act } from '@testing-library/react';
import usePrevious from './usePrevious';
describe('usePrevious hook', () => {
  let result: { current: string };
  let rerender;
  const firstValue = 'first';
  const secondValue = 'second';

  beforeEach(() => {
    const hook = renderHook<string, string>((value) =>
      usePrevious<string>(value)
    );
    result = hook.result;
    rerender = hook.rerender;
    act(() => {
      rerender(firstValue);
    });
  });

  it('should return the undefined value for the first change', () => {
    expect(result.current).toBeUndefined();
  });

  it('should return the correct value for the second change', () => {
    act(() => {
      rerender(secondValue);
    });
    expect(result.current).toBe(firstValue);
  });
});

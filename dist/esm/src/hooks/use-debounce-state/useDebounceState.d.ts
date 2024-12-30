declare function useDebounceState<T>(initialValue: T, debouncedTime?: number): {
    state: T;
    debouncedState: T;
    setState: (value: T) => void;
};
export default useDebounceState;

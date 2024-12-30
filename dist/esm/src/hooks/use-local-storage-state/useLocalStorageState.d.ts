export declare const getItem: (key: string) => any;
declare function useLocalStorageState<T>(key: string, defaultValue?: T): [T, (value: T) => void];
export default useLocalStorageState;

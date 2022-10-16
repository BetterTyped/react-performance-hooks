export type DebounceType = ReturnType<typeof setTimeout> | null;

export type DebounceFunctionType = (
  callback: () => void | Promise<void>,
  dynamicDelay?: number,
) => void;

export type UseDebounceReturnType = {
  debounce: DebounceFunctionType;
  reset: VoidFunction;
  active: boolean;
};

export type UseDebounceProps = {
  delay?: number;
};

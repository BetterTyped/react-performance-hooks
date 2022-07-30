import { useRef } from "react";
import { useWillUnmount, useForceUpdate } from "@better-typed/react-lifecycle-hooks";

type DebounceType = ReturnType<typeof setTimeout> | null;
export type DebounceFunctionType = (
  callback: () => void | Promise<void>,
  dynamicDelay?: number,
) => void;
export type UseDebounceReturnType = {
  debounce: DebounceFunctionType;
  reset: VoidFunction;
  active: boolean;
};

/**
 * @param delay
 * @internal
 * @returns
 */
export const useDebounce = (delay = 400): UseDebounceReturnType => {
  const shouldRerenderActive = useRef(false);
  const timer = useRef<DebounceType>(null);
  const forceUpdate = useForceUpdate();

  const rerenderActive = () => {
    if (shouldRerenderActive.current) forceUpdate();
  };

  const reset = () => {
    if (timer.current !== null) clearTimeout(timer.current);
    timer.current = null;
  };

  const debounce: DebounceFunctionType = (callback, dynamicDelay) => {
    const time = dynamicDelay ?? delay;
    reset();
    timer.current = setTimeout(() => {
      timer.current = null;
      callback();
      rerenderActive();
    }, time);
    rerenderActive();
  };

  useWillUnmount(reset);

  return {
    get active() {
      shouldRerenderActive.current = true;
      return !!timer.current;
    },
    debounce,
    reset,
  };
};

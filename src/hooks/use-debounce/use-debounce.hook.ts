import { useCallback, useEffect, useRef } from "react";
import { useForceUpdate } from "@better-hooks/lifecycle";

import { DebounceType, UseDebounceProps, DebounceFunctionType, UseDebounceReturnType } from "hooks";

export const useDebounce = (props?: UseDebounceProps): UseDebounceReturnType => {
  const { delay = 400 } = props || {};
  const shouldRerenderActive = useRef(false);
  const timer = useRef<DebounceType>(null);
  const forceUpdate = useForceUpdate();

  const rerenderActive = useCallback(() => {
    if (shouldRerenderActive.current) forceUpdate();
  }, [forceUpdate]);

  const reset = () => {
    if (timer.current !== null) clearTimeout(timer.current);
    timer.current = null;
  };

  const debounce: DebounceFunctionType = useCallback(
    (callback, dynamicDelay) => {
      const time = dynamicDelay ?? delay;
      reset();
      timer.current = setTimeout(() => {
        timer.current = null;
        callback();
        rerenderActive();
      }, time);
      rerenderActive();
    },
    [delay, rerenderActive],
  );

  useEffect(() => {
    return reset;
  }, []);

  return {
    get active() {
      shouldRerenderActive.current = true;
      return !!timer.current;
    },
    debounce,
    reset,
  };
};

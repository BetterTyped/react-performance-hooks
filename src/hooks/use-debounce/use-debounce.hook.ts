import { useEffect, useRef } from "react";

import {
  DebounceType,
  UseDebounceProps,
  DebounceFunctionType,
  UseDebounceReturnType,
} from "./use-debounce.types";
import { useForceUpdate } from "hooks/use-force-update";

export const useDebounce = (props?: UseDebounceProps): UseDebounceReturnType => {
  const { delay = 400 } = props || {};
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

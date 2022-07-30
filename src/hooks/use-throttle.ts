import { useRef } from "react";

import { useForceUpdate, useWillUnmount } from "@better-typed/react-lifecycle-hooks";

type ThrottleType = ReturnType<typeof setTimeout> | null;
export type ThrottleFunctionType = (
  callback: () => void | Promise<void>,
  dynamicDelay?: number,
) => void;
export type UseThrottleReturnType = {
  throttle: ThrottleFunctionType;
  reset: VoidFunction;
  active: boolean;
};

export type ThrottleFunction = (
  callback: () => void | Promise<void>,
  dynamicDelay?: number,
) => void;

export const useThrottle = (delay = 200): UseThrottleReturnType => {
  const lastExecution = useRef<number>(0);
  const newRun = useRef<boolean>(true);
  const shouldRerenderActive = useRef(false);
  const timer = useRef<ThrottleType>(null);
  const forceUpdate = useForceUpdate();

  const throttle: ThrottleFunction = (callback: () => Promise<void> | void, dynamicDelay) => {
    const trigger = () => {
      lastExecution.current = Date.now();
      callback();
      rerenderActive();
    };

    const time = dynamicDelay ?? delay;
    const shouldCallImmediately = Date.now() >= lastExecution.current + time;

    if (newRun.current) rerenderActive();
    if (timer.current) reset();

    if (shouldCallImmediately) {
      trigger();
    } else {
      timer.current = setTimeout(() => {
        timer.current = null;
        newRun.current = true;
        trigger();
      }, time);
    }
  };

  const rerenderActive = () => {
    if (newRun.current) newRun.current = false;
    if (shouldRerenderActive.current) forceUpdate();
  };

  const reset = () => {
    if (timer.current !== null) clearTimeout(timer.current);
    timer.current = null;
  };

  useWillUnmount(reset);

  return {
    get active() {
      shouldRerenderActive.current = true;
      return !!timer.current;
    },
    throttle,
    reset,
  };
};

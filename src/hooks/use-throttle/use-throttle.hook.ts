import { useEffect, useRef } from "react";

import {
  ThrottleType,
  UseThrottleProps,
  ThrottleFunctionType,
  UseThrottleReturnType,
} from "./use-throttle.types";
import { useForceUpdate } from "hooks/use-force-update";

export const useThrottle = (props?: UseThrottleProps): UseThrottleReturnType => {
  const { executionInterval = 200, executionTimeout = 200 } = props || {};
  const lastExecution = useRef<number>(0);
  const newRun = useRef<boolean>(true);
  const shouldRerenderActive = useRef(false);
  const timer = useRef<ThrottleType>(null);
  const forceUpdate = useForceUpdate();

  const rerenderActive = () => {
    if (newRun.current) newRun.current = false;
    if (shouldRerenderActive.current) forceUpdate();
  };

  const reset = () => {
    if (timer.current !== null) clearTimeout(timer.current);
    timer.current = null;
  };

  const throttle: ThrottleFunctionType = (callback, dynamicProps) => {
    const trigger = () => {
      lastExecution.current = Date.now();
      callback();
      rerenderActive();
    };

    const intervalTime = dynamicProps?.executionInterval ?? executionInterval;
    const timeoutTime = dynamicProps?.executionTimeout ?? executionTimeout;
    const shouldCallImmediately = Date.now() >= lastExecution.current + intervalTime;

    if (newRun.current) rerenderActive();
    if (timer.current) reset();

    if (shouldCallImmediately) {
      trigger();
    } else if (timeoutTime) {
      timer.current = setTimeout(() => {
        timer.current = null;
        newRun.current = true;
        trigger();
      }, timeoutTime);
    }
  };

  useEffect(() => {
    return reset;
  }, []);

  return {
    get active() {
      shouldRerenderActive.current = true;
      return !!timer.current;
    },
    throttle,
    reset,
  };
};

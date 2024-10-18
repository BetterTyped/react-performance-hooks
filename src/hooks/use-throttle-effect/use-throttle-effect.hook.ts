/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useThrottle, UseThrottleProps } from "hooks";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useThrottleEffect = (
  callback: () => void,
  props: UseThrottleProps,
  dependencies: any[],
) => {
  const { throttle } = useThrottle(props);
  useEffect(() => {
    throttle(callback);
  }, dependencies);
};

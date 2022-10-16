/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { UseThrottleProps } from "hooks/use-throttle/use-throttle.types";
import { useThrottle } from "hooks/use-throttle/use-throttle.hook";

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

import { useState } from "react";

import { useThrottle } from "hooks/use-throttle/use-throttle.hook";
import { UseThrottleProps } from "hooks/use-throttle/use-throttle.types";

export const useThrottleState = <T>(initialValue: T, props: UseThrottleProps) => {
  const { throttle } = useThrottle(props);
  const [value, setValue] = useState(initialValue);
  return [value, (newValue: Parameters<typeof setValue>[0]) => throttle(() => setValue(newValue))];
};

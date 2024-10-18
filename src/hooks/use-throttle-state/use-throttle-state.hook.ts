import { useState } from "react";

import { useThrottle, UseThrottleProps } from "hooks";

export const useThrottleState = <T>(initialValue: T, props: UseThrottleProps) => {
  const { throttle } = useThrottle(props);
  const [value, setValue] = useState(initialValue);
  return [
    value,
    (newValue: Parameters<typeof setValue>[0]) => throttle(() => setValue(newValue)),
  ] as const;
};

export type ThrottleType = ReturnType<typeof setTimeout> | null;

export type ThrottleFunctionType = (
  callback: () => void | Promise<void>,
  dynamicProps?: UseThrottleProps,
) => void;

export type UseThrottleReturnType = {
  throttle: ThrottleFunctionType;
  reset: VoidFunction;
  active: boolean;
};

export type UseThrottleProps = {
  /**
   * Execution interval time for triggering callback
   */
  executionInterval?: number;
  /**
   * Callback timeout when throttling stops triggering
   */
  executionTimeout?: number | false;
};

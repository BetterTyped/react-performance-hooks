/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useRef } from "react";

import { isEqual } from "./use-deep-effect.utils";

const memo = (value: any) => {
  const ref = useRef(value);
  const changed = useRef<number>(0);

  if (!isEqual(value, ref.current)) {
    ref.current = value;
    changed.current += 1;
  }

  return useMemo(() => ref.current, [changed.current]);
};

export const useDeepEffect = (
  callback: VoidFunction | (() => VoidFunction),
  dependencies: any[],
) => {
  return useEffect(callback, memo(dependencies));
};

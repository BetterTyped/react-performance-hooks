/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useDebounce, UseDebounceProps } from "hooks";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounceEffect = (
  callback: () => void,
  props: UseDebounceProps,
  dependencies: any[],
) => {
  const { debounce } = useDebounce(props);
  useEffect(() => {
    debounce(callback);
  }, dependencies);
};

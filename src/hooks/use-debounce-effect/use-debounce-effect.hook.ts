/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useDebounce } from "hooks/use-debounce/use-debounce.hook";
import { UseDebounceProps } from "hooks/use-debounce/use-debounce.types";

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

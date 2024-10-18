import { useState } from "react";

import { useDebounce, UseDebounceProps } from "hooks";

export const useDebounceState = <T>(initialValue: T, props?: UseDebounceProps) => {
  const { debounce } = useDebounce(props);
  const [value, setValue] = useState(initialValue);
  return [
    value,
    (newValue: Parameters<typeof setValue>[0]) => debounce(() => setValue(newValue)),
  ] as const;
};

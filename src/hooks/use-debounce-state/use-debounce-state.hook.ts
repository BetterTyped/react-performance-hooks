import { useState } from "react";

import { useDebounce } from "hooks/use-debounce/use-debounce.hook";
import { UseDebounceProps } from "hooks/use-debounce/use-debounce.types";

export const useDebounceState = <T>(initialValue: T, props?: UseDebounceProps) => {
  const { debounce } = useDebounce(props);
  const [value, setValue] = useState(initialValue);
  return [value, (newValue: Parameters<typeof setValue>[0]) => debounce(() => setValue(newValue))];
};

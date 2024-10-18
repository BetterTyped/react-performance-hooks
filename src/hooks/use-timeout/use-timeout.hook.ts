import { useEffect, useRef } from "react";

import { useIsomorphicEffect } from "hooks";

export const useTimeout = (callback: () => void, timeout: number | null) => {
  const savedCallback = useRef(callback);

  useIsomorphicEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!timeout && timeout !== 0) return;
    const id = setTimeout(() => savedCallback.current(), timeout);
    return () => clearTimeout(id);
  }, [timeout]);
};

import { useRef, useState } from "react";
import { useDidMount, useDidUpdate } from "@better-hooks/lifecycle";

import { UseIntervalOptions } from "hooks";

export const useInterval = (
  callback: () => void,
  interval: number | null,
  options?: UseIntervalOptions,
) => {
  const { immediate = true, disabled = false } = options || {};

  const [id, setId] = useState<null | ReturnType<typeof setInterval>>(null);
  const savedCallback = useRef(callback);

  const stop = () => {
    if (id) clearInterval(id);
    setId(null);
  };

  const start = () => {
    stop();
    if ((!interval && interval !== 0) || disabled) {
      return;
    }
    setId(setInterval(() => savedCallback.current(), interval));
  };

  useDidUpdate(() => {
    savedCallback.current = callback;
  }, [callback]);

  useDidMount(() => {
    savedCallback.current = callback;
    if (immediate) {
      start();
      return stop;
    }
  });

  useDidUpdate(() => {
    savedCallback.current = callback;
    start();
    return stop;
  }, [interval]);

  return { active: id !== null, start, stop };
};

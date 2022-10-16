import { useState } from "react";

export const useForceUpdate = () => {
  const [, rerender] = useState(0);

  return () => rerender((prev) => prev + 1);
};

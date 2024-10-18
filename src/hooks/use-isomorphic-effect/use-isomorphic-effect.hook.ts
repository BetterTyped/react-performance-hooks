import { useEffect, useLayoutEffect } from "react";

import { isBrowser } from "constants/browser";

export const useIsomorphicEffect = isBrowser ? useLayoutEffect : useEffect;

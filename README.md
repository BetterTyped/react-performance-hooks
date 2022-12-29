# 🎊 React Performance Hooks

<p>
  <a href="https://bettertyped.com/">
    <img src="https://custom-icon-badges.demolab.com/static/v1?label=&message=BetterTyped&color=333&logo=BT" />
  </a>
  <a href="https://github.com/BetterTyped/react-performance-hooks">
    <img src="https://custom-icon-badges.demolab.com/github/stars/BetterTyped/react-performance-hooks?logo=star&color=118ab2" />
  </a>
  <a href="https://github.com/BetterTyped/react-performance-hooks/blob/main/License.md">
    <img src="https://custom-icon-badges.demolab.com/github/license/BetterTyped/react-performance-hooks?logo=law&color=yellow" />
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img src="https://custom-icon-badges.demolab.com/badge/semver-commitzen-e10079?logo=semantic-release&color=e76f51" />
  </a>
  <a href="https://github.com/BetterTyped/react-performance-hooks">
    <img src="https://custom-icon-badges.demolab.com/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white" />
  </a>
  <a href="https://www.npmjs.com/package/@better-hooks/performance">
    <img src="https://custom-icon-badges.demolab.com/npm/v/@better-hooks/performance.svg?logo=npm&color=E10098" />
  </a>
  <a href="https://www.npmjs.com/package/@better-hooks/performance">
    <img src="https://custom-icon-badges.demolab.com/bundlephobia/minzip/@better-hooks/performance?color=blueviolet&logo=package" />
  </a>
  <a href="https://www.npmjs.com/package/@better-hooks/performance">
    <img src="https://custom-icon-badges.demolab.com/npm/dm/@better-hooks/performance?logoColor=fff&logo=trending-up" />
  </a>
</p>

## About

Debounce and throttle your functions, state and effects to gain performance boost!

## Key Features

🔮 **Simple usage**

🚀 **Fast and light**

✨ **Debounce and Throttle**

🎊 **Lifecycle debounce and throttle**

📡 **State debounce and throttle**

## Installation

```bash
npm install --save @better-hooks/performance
```

or

```bash
yarn add @better-hooks/performance
```

---

## Examples

#### useDebounce

This hook allows debouncing of the given function. Function will be called after some amount of time
from the last execution. We can adjust debounce time with additional props.

```tsx
import React from "react";
import { useDebounce } from "@better-hooks/performance";

const MyComponent: React.FC = () => {
  const {debounce, reset, active} = useDebounce({ delay: 600 })

  // Standard usage
  const onTyping = () => {
    debounce(() => {
      // debounced logic
    })
  }

  // Dynamic delay value
  const onTypingDynamic = (value: string, customDelay: number) => {
    debounce(() => {
      // debounced logic
    }, { delay: customDelay })
  }

  return (
    // ...
  )
}

```

---

#### useDebounceState

This hook allows debouncing of state. Value will be saved after some amount of time from the last
execution of set function. We can adjust debounce time with additional props.

```tsx
import React from "react";
import { useWindowEvent } from "@better-hooks/window";
import { useDebounceState } from "@better-hooks/performance";

const MyComponent: React.FC = () => {
  const [value, setValue] = useDebounceState("20px")

  useWindowEvent("scroll", (e) => {
    setValue(e.scrollY + "px");
  })

  return (
    // ...
  )
}

```

---

#### useDebounceEffect

This hook allows debouncing of lifecycle effect.

```tsx
import React from "react";
import { useDebounceEffect } from "@better-hooks/performance";

const MyComponent: React.FC = (props) => {

  useDebounceEffect(() => {
    // Do something
  }, { delay: 200 }, [props])

  return (
    // ...
  )
}

```

---

#### useThrottle

This hook allows debouncing of the given function.

```tsx
import React from "react";
import { useThrottle } from "@better-hooks/performance";

const MyComponent: React.FC = ({ delay }) => {
  const {throttle, reset, active} = useThrottle(delay)

  // Standard usage
  const onScroll = () => {
    throttle(() => {
      // throttle logic
    })
  }

  // Dynamic delay value
  const onScrollDynamic = (value: string, customDelay: number) => {
    throttle(() => {
      // throttle logic
    }, customDelay)
  }

  return (
    // ...
  )
}

```

---

#### useThrottleState

This hook allows throttling of state. We can adjust execution interval time and execution timeout
time with additional props.

```tsx
import React from "react";
import { useWindowEvent } from "@better-hooks/window";
import { useThrottleState } from "@better-hooks/performance";

const MyComponent: React.FC = () => {
  const [value, setValue] =  useThrottleState("20px")

  useWindowEvent("scroll", (e) => {
    setValue(e.scrollY + "px");
  })

  return (
    // ...
  )
}

```

```tsx
import React from "react";
import { useWindowEvent } from "@better-hooks/window";
import { useThrottleState } from "@better-hooks/performance";

const MyComponent: React.FC = () => {
  const [value, setValue] =  useThrottleState("20px", {
    interval: 200, // We will save values at least once per 200ms
    timeout: 400 // Last set state action will get triggered after 400ms, we can also disable it
  })

  useWindowEvent("scroll", (e) => {
    setValue(e.scrollY + "px");
  })

  return (
    // ...
  )
}

```

---

#### useThrottleEffect

This hook allows debouncing of lifecycle effect.

```tsx
import React from "react";
import { useThrottleEffect } from "@better-hooks/performance";

const MyComponent: React.FC = (props) => {

   useThrottleEffect(() => {
    // Do something
  }, { interval: 200, timeout: false }, [props])

  return (
    // ...
  )
}

```

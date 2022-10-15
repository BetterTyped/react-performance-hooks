# React Performance Hooks

[![NPM](https://img.shields.io/npm/v/@better-hooks/performance.svg)](https://www.npmjs.com/package/@better-hooks/performance)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@better-hooks/performance)
![npm type definitions](https://img.shields.io/npm/types/@better-hooks/performance)
![NPM](https://img.shields.io/npm/l/@better-hooks/performance)
![npm](https://img.shields.io/npm/dm/@better-hooks/performance)
![GitHub stars](https://img.shields.io/github/stars/BetterTyped/react-performance-hooks?style=social)

> Debounce and throttle your functions to gain performance boost!

- [Better Typed](https://github.com/BetterTyped)

## Features

- :rocket: Simple, fast and light
- :factory: Debounce and Throttle
- 🪗 Lifecycle events handling

## Install

```bash
npm install --save @better-hooks/performance
```

or

```bash
yarn add @better-hooks/performance
```

## useDebounce

This hook allows debouncing of the given function.

```tsx
import React from "react";
import { useDebounce } from "@better-hooks/performance";

const MyComponent: React.FC = ({ delay }) => {
  const {debounce, reset, active} = useDebounce(delay)

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
    }, customDelay)
  }

  return (
    // ...
  )
}

```

## useThrottle

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

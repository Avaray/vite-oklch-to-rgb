# 🤹 Vite Plugin for OKLCH to RGB Conversion

This [Vite](https://vite.dev/) plugin converts `oklch()` color notation to RGB
values during the build process. It is designed for projects that need to
support users on older web browsers that do not yet support OKLCH. You can check
the current browser compatibility for OKLCH
[here](https://caniuse.com/?search=oklch).

The plugin is compatible with frameworks such as [Astro](https://astro.build) or [Svelte](https://svelte.dev).  
It is helpful for projects using frameworks like [TailwindCSS](https://tailwindcss.com) or libraries like [daisyUI](https://daisyui.com).

## Plugin status: Work In Progess
- [ ] Fix `oklchRegex` and test it. Regex should be like `/oklch\(((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*)\)/g`
- [ ] Replace `color-mix` from oklch/oklab to srgb or hsl

<!-- ## Installation

```bash
# Deno
deno i npm:vite-oklch-to-rgb

# Bun
bun i vite-oklch-to-rgb

# NPM
npm install vite-oklch-to-rgb

# PNPM
pnpm add vite-oklch-to-rgb

# Yarn
yarn add vite-oklch-to-rgb
``` -->

## Usage in Vite

```js
import { defineConfig } from "vite";
import oklchToRgb from "vite-oklch-to-rgb";

export default defineConfig({
  plugins: [oklchToRgb],
});
```

## Usage in Astro

```js
import { defineConfig } from "astro/config";
import oklchToRgb from "vite-oklch-to-rgb";

export default defineConfig({
  vite: {
    plugins: [oklchToRgb],
  },
});
```

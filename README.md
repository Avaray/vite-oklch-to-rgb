# 🤹 Vite OKLCH to RGB converter

[Vite](https://vite.dev/) plugin that converts `oklch()` color notation to RGB
values during build.\
Can be used in frameworks like [Astro](https://astro.build) or
[Svelte](https://svelte.dev). Created for projects targeting users who are using
older browsers that do not support the OKLCH format.

This is solution for projects where you are using framweorks like
[TailwindCSS](https://tailwindcss.com) or libraries like
[daisyUI](https://daisyui.com).

## Installation

```bash
# Deno
deno i npm::vite-oklch-to-rgb

# Bun
bun i vite-oklch-to-rgb

# NPM
npm install vite-oklch-to-rgb

# PNPM
pnpm add vite-oklch-to-rgb

# Yarn
yarn add vite-oklch-to-rgb
```

## Usage in Vite

```js
import { defineConfig } from "vite";
import oklchToRgb from "vite-oklch-to-rgb";

export default defineConfig({
  plugins: [oklchToRgb()],
});
```

## Usage in Astro

```js
import { defineConfig } from "astro/config";
import oklchToRgb from "vite-oklch-to-rgb";

export default defineConfig({
  vite: {
    plugins: [oklchToRgb()],
  },
});
```

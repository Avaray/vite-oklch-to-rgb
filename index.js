import chroma from "chroma-js";

export default {
  name: "oklch-to-rgb",
  transform(code) {
    const oklchRegex = /oklch\(([^)]+)\)/g;
    return code.replace(oklchRegex, (match, p1) => {
      const parts = p1.split(/[\s,]+/).map((part) => part.trim());
      if (parts.length < 3) return match;

      try {
        const lightnessStr = parts[0];
        const lightness = lightnessStr.endsWith("%")
          ? parseFloat(lightnessStr.slice(0, -1)) / 100
          : parseFloat(lightnessStr);

        const chromaValue = parseFloat(parts[1]);
        const hue = parseFloat(parts[2]);

        const rgb = chroma.oklch(lightness, chromaValue, hue).rgb();
        return `rgb(${Math.round(rgb[0])}, ${Math.round(rgb[1])}, ${
          Math.round(rgb[2])
        })`;
      } catch {
        return match;
      }
    });
  },
};

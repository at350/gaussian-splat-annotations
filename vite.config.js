import { defineConfig } from "vite";
export default defineConfig({
  // uses repo name
  base: "/gaussian-splat-annotations/",
  build: { target: "es2020" },
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
});

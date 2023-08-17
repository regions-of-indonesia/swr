import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    target: "esnext",
    minify: true,
    lib: {
      entry: ["src/index.ts"],
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "swr"],
    },
  },
});

import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        thanks: resolve(__dirname, "thanks_masshtabirovanie/index.html"),
      },
    },
  },
});

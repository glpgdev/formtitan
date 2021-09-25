import { defineConfig } from "vite";
import path from "path";

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/styles/style.css"),
      name: "productionCss",
    },
  },
});

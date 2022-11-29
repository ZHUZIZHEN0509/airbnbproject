const CracoLessPlugin = require("craco-less");
const path = require("path");
const resolve = (filepath) => path.resolve(__dirname, filepath);

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
};

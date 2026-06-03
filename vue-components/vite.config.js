export default {
  base: "./",
  build: {
    lib: {
      entry: "./src/main.js",
      name: "try_out",
      formats: ["umd"],
      fileName: "try_out",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    outDir: "../src/try_out/module/serve",
    assetsDir: ".",
  },
};

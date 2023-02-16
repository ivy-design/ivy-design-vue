import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === "build") {
    return {
      plugins: [vue(), vueJsx()],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
      },
      build: {
        lib: {
          entry: "./src/components/index.ts",
          name: "ivy-design",
          fileName: "ivy-design",
          formats: ["es", "umd"],
        },
        rollupOptions: {
          external: ["vue", "vue-router"],
          output: {
            globals: {
              vue: "Vue",
              "vue-router": "vueRouter",
            },
            exports: "named",
          },
        },
      },
    };
  } else {
    return {
      plugins: [vue(), vueJsx()],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
      },
      build: {
        lib: {
          entry: "./src/components/index.ts",
          name: "ivy-design",
          fileName: "ivy-design",
          formats: ["es", "umd"],
        },
        rollupOptions: {
          external: ["vue"],
          output: {
            globals: {
              vue: "Vue",
            },
            exports: "named",
          },
        },
      },
    };
  }
});

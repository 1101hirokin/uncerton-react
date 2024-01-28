import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        {
          src:
            /* don't use __dirname and resolve here */
            "./src/components/global.css",
          /* to expose the file as-is at the root of the output dir (no subdirectory) */
          dest: "./",
        },
      ],
      /* uncomment to see the output */
      // verbose: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "index",
      fileName: "index",
      formats: [
        "es",
        /* uncomment to support IE11 */
        // "umd",
      ],
    },
    sourcemap: true,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const isProdBuild = mode === "build-mf"; // our custom prod MF mode

  return {
    plugins: [react()],
    build: {
      lib: {
        entry: "./src/export.js",
        name: "SignInMF",
        fileName: () => `signin-bundle.js`,
        formats: ["umd"],
      },
      rollupOptions: {
        external: isProdBuild ? ["react", "react-dom"] : [],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
      cssCodeSplit: false,
      define: {
        "process.env": JSON.stringify({}),
      },
      outDir: "dist",
    },
    optimizeDeps: {
      exclude: isProdBuild ? ["react", "react-dom"] : [],
    },
  };
});

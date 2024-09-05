import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";
import svgr from 'vite-plugin-svgr';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteStaticCopy({
      targets: [
        {
          src: "src/robots.txt",
          dest: "",
        },
        {
          src: "src/sitemap.xml",
          dest: "",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@servicios": path.resolve(__dirname, "./src/assets/servicios"),
      "@gardesuites": path.resolve(__dirname, "./src/assets/gardesuites"),
      "@bahiasuites": path.resolve(__dirname, "./src/assets/bahiasuites"),
      "@mastersuites": path.resolve(__dirname, "./src/assets/mastersuites"),
      "@carrusel": path.resolve(__dirname, "./src/assets/carrusel"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});

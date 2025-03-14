import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/ip-tracking",
  plugins: [react()],
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      crypto: path.resolve(__dirname, "node_modules/crypto-browserify"),
    },
  },
});

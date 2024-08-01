import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/frontend-3rd-stockoption/",
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change to your desired development port
    open: true, // Opens the browser when the server starts
    host: true,
  },
});

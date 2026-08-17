import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart(),
    viteReact(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  server: {
    allowedHosts: [".ngrok-free.dev", "localhost"],
    host: "0.0.0.0",
    port: 3000,
  },
});

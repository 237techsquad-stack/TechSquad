// TanStack Start configuration with ngrok support
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    server: {
      allowedHosts: [".ngrok-free.dev", "localhost"],
      host: "0.0.0.0",
      port: 3000,
    },
  },
});

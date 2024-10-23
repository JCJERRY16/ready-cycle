import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfqPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfqPaths(), react()],
});

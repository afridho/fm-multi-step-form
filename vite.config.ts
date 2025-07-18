import path from "path";
import { defineConfig } from "vite";
import netlify from "@netlify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [netlify()],
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "./src"),
        },
    },
});

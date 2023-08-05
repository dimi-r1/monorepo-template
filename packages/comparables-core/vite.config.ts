import { resolve } from "path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./setupTests.js",
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.tsx"),
            name: "comparables-core",
        },
        rollupOptions: {
            // Externalize deps that shouldn't be bundled into the library.
            external: ["react", "react-dom"],
            output: {
                // Provide global variables to use in the UMD build for externalized deps
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Give vite the ability to resolve imports using TypeScript's path mapping, which is defined in tsconfig files
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react(),tsconfigPaths()],
    optimizeDeps: {
        esbuildOptions: {
          // Node.js global to browser globalThis
          define: {
            global: 'globalThis',
          },
        },
    },
})
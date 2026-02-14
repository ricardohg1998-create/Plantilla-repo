import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'happy-dom',
        globals: true,
        setupFiles: [],
        include: ['**/*.test.{ts,tsx}'],
        alias: {
            '@plantilla/shared': path.resolve(__dirname, './shared'),
        },
    },
});

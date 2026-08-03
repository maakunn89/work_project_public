import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    // ...既存の設定
    server: {
        watch: {
            usePolling: true, // ファイルの変更を強制的に監視
        },
    },
});

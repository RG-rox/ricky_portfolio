import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    hmr: {
      overlay: true
    },
    allowedHosts: ['5b3b-183-83-153-154.ngrok-free.app']
  },
  assetsInclude: ['**/*.weights', '**/face_expression_model-shard1*']
});

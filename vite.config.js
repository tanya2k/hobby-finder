import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/lore-ideas/',  
  plugins: [react()],
});

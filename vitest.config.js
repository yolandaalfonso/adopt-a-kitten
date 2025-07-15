// vitest.config.js
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Ensure React plugin is used for JSX support
  test: {
    environment: 'jsdom', // Simulate a browser environment
    globals: true, // Make Jest-like globals (describe, it, expect) available without import
    setupFiles: './src/setupTests.js', // Path to your test setup file (we'll create this next)
    css: true, // Enable CSS processing for tests
  },
});
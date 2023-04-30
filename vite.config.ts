import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      all: true,
      provider: 'istanbul',
      include: ['**/*.ts'], // default: '**/*.{js,ts}
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        'build.ts',
        'vite.config.ts',
      ],
      reporter: ['text'],
    },
  },
});

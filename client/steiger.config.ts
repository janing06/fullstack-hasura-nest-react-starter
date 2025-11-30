import fsd from '@feature-sliced/steiger-plugin';
import { defineConfig } from 'steiger';

export default defineConfig([
  ...fsd.configs.recommended,
  {
    ignores: ['**/.gitkeep'], // ✅ Ignore .gitkeep files properly
  },
  {
    rules: {
      'fsd/no-ui-in-app': 'off', // It's easier to place UI like headers in the app layer
    },
  },
  // The names of the Documents in hooks.ts and graphql.ts has objects with similar names,
  // so they cannot be exported from the public API simultaneously
  {
    files: ['./src/shared/api/apollo-client/generated/hooks.ts'],
    rules: {
      'fsd/no-public-api-sidestep': 'off',
    },
  },
  {
    files: [
      // For files that are currently used in one place, but are expected to be used in more in the future, add them here
      // Similarly, when listed here but is no longer used in just one place, remove from this list
    ],
    rules: {
      'fsd/insignificant-slice': 'off',
    },
  },
]);

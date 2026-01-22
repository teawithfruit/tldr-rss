import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

/**
 * A custom ESLint configuration for projects that use typescript without a
 * framework.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export default defineConfig([
  tseslint.configs.recommended,

  // matches all files because it doesn't specify the `files` or `ignores` key
  {
    rules: {},
  },
]);

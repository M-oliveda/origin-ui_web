import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
    {
        rules: {
            // TypeScript strictness
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-non-null-assertion": "warn",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],

            // JavaScript hygiene
            "prefer-const": "error",
            "no-var": "error",
            "no-console": ["warn", { allow: ["warn", "error"] }],
            eqeqeq: ["error", "always"],
        },
    },
    // Must be last — disables ESLint rules that would conflict with Prettier
    prettierConfig,
]);

export default eslintConfig;

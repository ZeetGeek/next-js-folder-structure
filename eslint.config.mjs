// eslint.config.mjs
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import importPlugin from "eslint-plugin-import";
import globals from "globals";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,

    globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "node_modules/**", "dist/**"]),

    // Prettier config (must come before custom rules)
    prettierConfig,
    prettierPlugin,

    // Import plugin configuration
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        plugins: {
            import: importPlugin,
        },
        settings: {
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                    project: "./tsconfig.json",
                },
            },
        },
    },

    // Main rules configuration
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            import: importPlugin,
        },
        rules: {
            "prettier/prettier": "error",
            "consistent-this": "warn",
            "no-duplicate-imports": "error",
            "no-self-compare": "error",
            "no-template-curly-in-string": "error",
            "no-unassigned-vars": "error",
            "no-unmodified-loop-condition": "error",
            "no-unreachable-loop": "error",
            "arrow-body-style": ["warn", "always"],
            "block-scoped-var": "warn",
            "no-use-before-define": "warn",
            camelcase: ["error", { properties: "always" }],
            "capitalized-comments": ["error", "always"],
            "consistent-return": ["error", { treatUndefinedAsUnspecified: true }],
            "no-useless-assignment": "error",
            curly: ["error", "all"],
            "default-case": "error",
            "default-case-last": "error",
            "default-param-last": "error",
            "dot-notation": "error",
            eqeqeq: ["error", "always"],
            "func-name-matching": "error",
            "func-names": ["error", "always"],
            "func-style": [
                "error",
                "expression",
                {
                    allowArrowFunctions: true,
                    allowTypeAnnotation: true,
                    overrides: {
                        namedExports: "ignore",
                    },
                },
            ],
            "guard-for-in": "error",
            "id-length": [
                "error",
                {
                    min: 3,
                    max: 30,
                },
            ],
            "logical-assignment-operators": ["error", "always"],
            "max-depth": ["error", 5],
            "max-nested-callbacks": ["error", 4],
            "no-alert": "error",
            "no-array-constructor": "error",
            "no-bitwise": "error",
            "no-case-declarations": "error",
            "no-console": "warn",
            "no-delete-var": "error",
            "no-div-regex": "error",
            "no-else-return": "error",
            "no-empty": "error",
            "no-empty-function": "error",
            "no-empty-static-block": "error",
            "no-eq-null": "error",
            "no-eval": "error",
            "no-extend-native": "error",
            "no-extra-bind": "error",
            "no-extra-boolean-cast": "error",
            "no-global-assign": "error",
            "no-implicit-coercion": "error",
            "no-implied-eval": "error",
            "no-inline-comments": "error",
            "no-invalid-this": "error",
            "no-labels": "error",
            "no-lone-blocks": "error",
            "no-lonely-if": "error",
            "no-multi-assign": "error",
            "no-multi-str": "error",
            "no-negated-condition": "error",
            "no-nested-ternary": "error",
            "no-nonoctal-decimal-escape": "error",
            "no-octal": "error",
            "no-octal-escape": "error",
            "no-redeclare": "error",
            "no-regex-spaces": "error",
            "no-restricted-exports": "error",
            "no-restricted-imports": "error",
            "no-restricted-syntax": "error",
            "no-return-assign": "error",
            "no-shadow-restricted-names": "error",
            "no-undef-init": "error",
            "no-unused-labels": "error",
            "no-useless-catch": "error",
            "no-useless-computed-key": "error",
            "no-useless-concat": "error",
            "no-useless-escape": "error",
            "no-useless-rename": "error",
            "no-useless-return": "error",
            "no-var": "error",
            "no-warning-comments": "error",
            "no-with": "error",
            "one-var": "error",
            "operator-assignment": "error",
            "prefer-const": "error",
            "prefer-template": "error",
            "require-yield": "error",
            "sort-imports": [
                "error",
                {
                    ignoreCase: false,
                    ignoreDeclarationSort: false,
                    ignoreMemberSort: false,
                    memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
                    allowSeparatedGroups: false,
                },
            ],
            "sort-keys": [
                "error",
                "asc",
                {
                    caseSensitive: true,
                    natural: false,
                    minKeys: 2,
                    allowLineSeparatedGroups: false,
                    ignoreComputedKeys: false,
                },
            ],
            "sort-vars": [
                "error",
                {
                    ignoreCase: true,
                },
            ],
        },
    },
]);

export default eslintConfig;

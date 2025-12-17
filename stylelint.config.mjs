/** @type {import('stylelint').Config} */
const config = {
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-prettier-scss",
        "stylelint-config-standard",
        "stylelint-config-tailwindcss",
        "stylelint-config-sass-guidelines",
    ],
    rules: {
        // Add custom rules here if needed
        "scss/operator-no-newline-before": null,
        "scss/operator-no-unspaced": null,
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: ["tailwind", "apply", "layer", "config", "import"],
            },
        ],
        "import-notation": "string",
    },
    ignoreFiles: ["node_modules/**", ".next/**", "dist/**"],
};

export default config;

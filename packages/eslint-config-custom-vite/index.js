module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
            rules: {
                "import/no-commonjs": 0,
                "@typescript-eslint/no-var-requires": 0,
            },
        },
        {
            files: ["vite.config.ts"],
            rules: {
                "import/no-extraneous-dependencies": 0,
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react", "prettier"],
    rules: {
        "react/react-in-jsx-scope": 0,
    },
};

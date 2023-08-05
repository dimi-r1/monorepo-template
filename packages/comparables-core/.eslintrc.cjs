module.exports = {
    root: true,
    extends: ["custom-vite"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "packages/comparables-core/tsconfig.json",
        exclude: ["node_modules", "dist"],
    },
};

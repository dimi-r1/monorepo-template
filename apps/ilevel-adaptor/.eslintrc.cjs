module.exports = {
    root: true,
    extends: ["custom-vite"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "apps/ilevel-adaptor/tsconfig.json",
        exclude: ["node_modules", "dist"],
    },
};

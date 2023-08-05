const { resolve } = require("path");

module.exports = {
    root: true,
    extends: ["custom-vite"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: resolve(__dirname, "tsconfig.json"),
        exclude: ["node_modules", "dist"],
    },
};

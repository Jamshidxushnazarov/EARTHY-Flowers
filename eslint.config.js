import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginPrettier from "eslint-plugin-prettier";

export default defineConfig([
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser,
        },
        plugins: {
            react: pluginReact,
            "jsx-a11y": pluginJsxA11y,
            "react-hooks": pluginReactHooks,
            prettier: pluginPrettier,
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "prettier/prettier": "warn", // ← Prettier ESLint orqali tekshiradi
        },
    },
    js.configs.recommended,
    pluginReact.configs.flat.recommended,
    pluginJsxA11y.configs.recommended,
    pluginPrettier.configs.recommended, // ← Prettier uchun config
]);

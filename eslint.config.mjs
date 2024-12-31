import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
  rules: {
    eqeqeq: "off",
    "no-unused-vars": "error",
    "no-unused-expressions": "error",
    "no-console": "warn",
    "no-undef": "error",
    "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
  },
  globals:{
    "process": "readonly",
  } 
},
  {
    ignores: [".node_modules/*"]
},
];
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import stylisticJs from '@stylistic/eslint-plugin-js'


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    plugins: {
    '@stylistic/js': stylisticJs
    },
    rules: {
      "@stylistic/js/no-trailing-spaces": [
        2,
        {
          "skipBlankLines": true
        }
      ],
      "@stylistic/js/semi": 0,
      "@stylistic/js/indent": [
        "error",
        2
      ],
      "@stylistic/js/space-before-function-paren": [
        2,
        {
          "anonymous": "never",
          "named": "never",
          "asyncArrow": "always"
        }
      ]
    }
  }
];

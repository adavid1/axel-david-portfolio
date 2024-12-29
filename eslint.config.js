import js from '@eslint/js'
import eslintPluginVue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'
import tailwind from "eslint-plugin-tailwindcss"

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  ...tailwind.configs["flat/recommended"],
  {
    files: ['*.vue', '*.js', '*.ts'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  }
]

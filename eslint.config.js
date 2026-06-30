import pluginVue from 'eslint-plugin-vue'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'
import tailwind from "eslint-plugin-tailwindcss"

export default defineConfigWithVueTs(
  {
    ignores: ['**/node_modules', '**/dist'],
  },
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  ...tailwind.configs["flat/recommended"],
  {
    files: ['**/*.{vue,js,ts}'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },
    settings: {
      // Semantic component classes defined in scoped <style> (e.g. cv-sheet,
      // cv-side-title) are not Tailwind utilities — whitelist them so
      // tailwindcss/no-custom-classname doesn't flag every usage.
      tailwindcss: {
        whitelist: ['cv-.*']
      }
    }
  }
)
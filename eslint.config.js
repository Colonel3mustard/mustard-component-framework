import js from '@eslint/js';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';

export default defineConfigWithVueTs(
  { ignores: ['node_modules', 'dist'] },
  pluginVue.configs['flat/strongly-recommended'],
  js.configs.recommended,
  vueTsConfigs.recommended,
  prettierRecommended,
  {
    rules: {
      'vue/no-custom-modifiers-on-v-model': 'off',
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'es5',
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          bracketSameLine: true,
          printWidth: 100,
          endOfLine: 'auto',
        },
      ],
    },
  }
);

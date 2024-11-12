module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'lefthook.yml', 'package*.json', 'README.md', 'index.html'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'react', 'simple-import-sort', 'import'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'prettier/prettier': 'warn',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // Força o uso de `type` para importações de tipos/interfaces
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports', // Garante o uso de 'type' para importações de tipos/interfaces
      },
    ],
    // Organiza as importações por separação de grupos e ordem alfabética
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'], // Importações de pacotes internos e externos
          ['internal'], // Importações de módulos internos
          ['parent', 'sibling', 'index'], // Importações de arquivos relativos
        ],
        'newlines-between': 'always', // Garante separação entre grupos
        alphabetize: {
          order: 'asc', // Ordem alfabética ascendente
          caseInsensitive: true, // Ignora maiúsculas/minúsculas
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

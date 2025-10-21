module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // Must be last to override other configs
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    'react-native/react-native': true,
    es2021: true,
    node: true,
  },
  rules: {
    // React rules
    'react/react-in-jsx-scope': 'off', // Not needed in React Native
    'react/prop-types': 'off', // Using TypeScript for prop validation

    // TypeScript rules
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    // General rules
    'no-console': ['warn', { allow: ['warn', 'error'] }], // Allow console.warn and console.error

    // Enforce comments for complex logic
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
  },
};

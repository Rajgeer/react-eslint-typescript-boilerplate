module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project:["./tsconfig.json",],
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
        version: 'detect',
    },
  },
  plugins: ["react", "@typescript-eslint", "tailwindcss", "eslint-plugin-tailwindcss"],
  extends: [
    "eslint:recommended", 
    "plugin:@typescript-eslint/recommended", 
    "plugin:prettier/recommended",
    "prettier",
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    indent: ['error', 2],
    '@typescript-eslint/indent': ['error', 2],
    'max-len': ['error', { code: 120 }],
  },
}

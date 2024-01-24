module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'linebreak-style': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/button-has-type': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-len': 'off',
    'object-curly-newline': 'off',
    'no-unsafe-optional-chaining': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'default-param-last': 'off',
    'no-param-reassign': 'off',
    'react/style-prop-object': 'off',
    'import/prefer-default-export': 'off',
  },
};

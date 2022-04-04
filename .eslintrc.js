const { rockConfig } = require('@rockpack/codestyle');

module.exports = rockConfig({
  'import/prefer-default-export': 'off',
  'react-hooks/exhaustive-deps': 'off',
  'react/no-array-index-key': 'off',
  'react/forbid-prop-types': 'off',
  'jsx-a11y/no-noninteractive-element-interactions': 'off',
  'jsx-a11y/control-has-associated-label': 'off',
  'no-return-await': 'off',
  'quote-props': 'off',
  'max-len': 'off',
  '@typescript-eslint/dot-notation': 'off',
});

module.exports = {
  env: {
    "browser": true,
    "node": true,
    "es6": true,
  },
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
  ],
  rules: {
    // Include .prettierrc.js rules
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/prop-types': 'off',
    "indent": ['error', 2, { SwitchCase: 1 }],
    "linebreak-style": "off",
    "import/no-named-as-default": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-access-key": 0,
    "jsx-a11y/anchor-is-valid": "off",
    "semi": "error"
  },
}

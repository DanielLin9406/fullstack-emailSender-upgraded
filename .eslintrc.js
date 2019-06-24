module.exports = {
  // 用于预定义全局变量
  env: {
    node: true // 启用node全局变量global等
  },
  parser: 'babel-eslint',
  plugins: ['graphql'],
  // 更改或覆盖添加的规则 off warn error
  rules: {
    'graphql/template-strings': [
      'error',
      {
        // Import default settings for your GraphQL client. Supported values:
        // 'apollo', 'relay', 'lokka', 'fraql', 'literal'
        env: 'relay',

        // Import your schema JSON here
        schemaJson: require('./schema.json')

        // OR provide absolute path to your schema JSON (but not if using `eslint --cache`!)
        // schemaJsonFilepath: path.resolve(__dirname, './schema.json'),

        // OR provide the schema in the Schema Language format
        // schemaString: printSchema(schema),

        // tagName is set for you to Relay.QL
      }
    ],
    'linebreak-style': 'off', // Don't play nicely with Windows.
    'arrow-parens': 'off', // Incompatible with prettier
    'object-curly-newline': 'off', // Incompatible with prettier
    'no-mixed-operators': 'off', // Incompatible with prettier
    'arrow-body-style': 'off', // Not our taste?
    'function-paren-newline': 'off', // Incompatible with prettier
    'no-plusplus': 'off',
    'operator-linebreak': 'off',
    'global-require': 'off',
    'no-undef': 'off',
    'no-confusing-arrow': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'space-before-function-paren': 0, // Incompatible with prettier
    'max-len': ['error', 200, 2, { ignoreUrls: true }], // airbnb is allowing some edge cases
    'no-console': 'warn', // airbnb is using warn
    'no-alert': 'warn', // airbnb is using warn
    'no-param-reassign': 'off', // Not our taste?
    'consistent-return': 'off',
    radix: 'off', // parseInt, parseFloat radix turned off. Not my taste.
    'react/require-default-props': 'off', // airbnb use error
    'react/forbid-prop-types': 'off', // airbnb use error
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb is using .jsx
    'prefer-destructuring': 'off',
    'react/button-has-type': 'off',
    'react/prefer-stateless-function': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-find-dom-node': 'off', // I don't know
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off', // Is still buggy
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-dynamic-require': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      { components: ['Link'], specialLink: ['to'] }
    ],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id']
        }
      }
    ], // for nested label htmlFor error

    'prettier/prettier': ['error']
  }
};

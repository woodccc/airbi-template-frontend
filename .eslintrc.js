// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow console during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow unused variables during development
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // disallow trailing commas
    'comma-dangle': ['error', 'never'],
    // disallow trailing semi
    'semi': ['error', 'never'],
    // allow the unary operators ++ and --
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'arrow-body-style': 'off',
    'no-trailing-spaces': 'off',
    'eol-last': 'off',
    'import/prefer-default-export': 'off',
    'object-shorthand': 'off',
    'func-names': 'off',
    'no-use-before-define': 'off',
    'object-curly-spacing': 'off',
    "max-len": [1,150],
  }
}

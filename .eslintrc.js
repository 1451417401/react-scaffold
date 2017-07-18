module.exports = {
    extends: 'eslint:recommended',
    env: {
        browser: true,
        node: true,

    },
    parserOptions: {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        },
    },
    rules: {
        'no-console': 'off',
        'curly': ['error', 'all'],
        'no-unused-vars': 'off',
    }
};

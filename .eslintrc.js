module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:react/recommended"
    ],
    "env": {
        "node": true
    },
    "rules": {
        "semi": ["error", "always"],
        "@typescript-eslint/no-var-requires": 0
    },
    "globals": {
        "window": true,
        "document": true,
        "navigator": true,
    },
};
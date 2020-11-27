module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "16.9"
        }
    },
    "rules": {
        "smart-tabs": 0,
        "no-tabs": 0,
        "semi": 1,
        "comma-dangle": 1,
        "react/jsx-uses-vars": 0,
        "react/react-in-jsx-scope": 0,
        "no-new-wrappers": 0,
        "no-mixed-operators": 0,
        "require-atomic-updates": 0,
        "no-unused-vars": 0,
        "no-useless-constructor": 0,
        "react/no-unescaped-entities": 0,
        "react/display-name": 0,
        "jsx-a11y/href-no-hash": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "no-useless-escape": 0,
        "no-console": 0,
        "no-debugger": 0,
        "no-empty": 0,
        "linebreak-style": 0,
        "import/first": 0,
        "import/imports-first": 0,
        "no-shadow": 0,
        "disable-next-line": 0,
        "no-case-declarations": 0,
        "default-case": 0,
        "no-async-promise-executor": 0,
        "require-await": 1,
        "no-mixed-spaces-and-tabs": 0
    }
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "eslint-plugin-import",
    "eslint-plugin-jsdoc",
    "eslint-plugin-react",
    "eslint-plugin-prefer-arrow",
    "@typescript-eslint",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array",
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          Object: {
            message: "Avoid using the `Object` type. Did you mean `object`?",
          },
          Function: {
            message:
              "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
          },
          Boolean: {
            message: "Avoid using the `Boolean` type. Did you mean `boolean`?",
          },
          Number: {
            message: "Avoid using the `Number` type. Did you mean `number`?",
          },
          String: {
            message: "Avoid using the `String` type. Did you mean `string`?",
          },
          Symbol: {
            message: "Avoid using the `Symbol` type. Did you mean `symbol`?",
          },
        },
      },
    ],
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "off",
      {
        accessibility: "explicit",
      },
    ],
    "@typescript-eslint/indent": [2, 2],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": [
      "off",
      {
        ignoreParameters: true,
      },
    ],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-shadow": [
      "off",
      {
        hoist: "all",
      },
    ],
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": ["off", "single"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        path: "always",
        types: "prefer-import",
        lib: "always",
      },
    ],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unified-signatures": "error",
    "arrow-body-style": "error",
    "arrow-parens": ["off", "always"],
    "brace-style": ["error", "1tbs"],
    "comma-dangle": "off",
    complexity: "off",
    "constructor-super": "error",
    curly: "error",
    "eol-last": "error",
    eqeqeq: ["error", "smart"],
    "guard-for-in": "error",
    "id-blacklist": "off",
    "id-match": "off",
    "import/no-deprecated": "warn",
    "import/order": "off",
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error",
    "jsdoc/newline-after-description": "error",
    "jsdoc/no-types": "error",
    "linebreak-style": "off",
    "max-classes-per-file": ["error", 1],
    "max-len": [
      "error",
      {
        code: 200,
      },
    ],
    "new-parens": "off",
    "newline-per-chained-call": "off",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": [
      "error",
      {
        allow: [
          "log",
          "warn",
          "dir",
          "timeLog",
          "assert",
          "clear",
          "count",
          "countReset",
          "group",
          "groupEnd",
          "table",
          "dirxml",
          "error",
          "groupCollapsed",
          "Console",
          "profile",
          "profileEnd",
          "timeStamp",
          "context",
        ],
      },
    ],
    "no-debugger": "error",
    "no-duplicate-imports": "error",
    "no-empty": "off",
    "no-eval": "error",
    "no-extra-semi": "off",
    "no-fallthrough": "error",
    "no-invalid-this": "off",
    "no-irregular-whitespace": "off",
    "no-multiple-empty-lines": "error",
    "no-new-wrappers": "error",
    "no-restricted-imports": ["error", "rxjs/Rx"],
    "no-throw-literal": "error",
    "no-trailing-spaces": [
      "error",
      {
        ignoreComments: true,
      },
    ],
    "no-undef-init": "error",
    "no-underscore-dangle": "off",
    "no-unsafe-finally": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "prefer-arrow/prefer-arrow-functions": "error",
    "prefer-const": "error",
    "quote-props": "off",
    radix: "off",
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-spacing": "off",
    "react/jsx-equals-spacing": "off",
    "react/jsx-key": "error",
    "react/jsx-no-bind": "off",
    "react/jsx-tag-spacing": [
      "off",
      {
        afterOpening: "allow",
        closingSlash: "allow",
      },
    ],
    "react/jsx-wrap-multilines": "off",
    "react/self-closing-comp": "error",
    "space-before-function-paren": "off",
    "space-in-parens": ["off", "never"],
    "spaced-comment": [
      "error",
      "always",
      {
        markers: ["/"],
      },
    ],
    "use-isnan": "error",
    "valid-typeof": "off",
    // "@typescript-eslint/tslint/config": [
    //     "error",
    //     {
    //         "rules": {
    //             "import-spacing": true,
    //             "jsx-no-string-ref": true,
    //             "prettier": true,
    //             "whitespace": [
    //                 true,
    //                 "check-branch",
    //                 "check-decl",
    //                 "check-operator",
    //                 "check-separator",
    //                 "check-type"
    //             ]
    //         }
    //     }
    // ]
  },
};

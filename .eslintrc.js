module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "prettier",
    "import",
    "eslint-comments",
    "eslint-plugin-tsdoc",
    "jsdoc"
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  rules: {
    ////////////////////////////////////////////////////////////////////////////
    // Supported Rules                                                        //
    ////////////////////////////////////////////////////////////////////////////
    "@typescript-eslint/array-type": ["error", {
      default: "array-simple"
    }],
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/class-literal-property-style": ["warn", "fields"],
    "@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/member-ordering": ["error", {
      default: {
        memberTypes: [
          // Index signature
        "signature",

        // Fields
        "public-static-field",
        "protected-static-field",
        "private-static-field",
        "public-decorated-field",
        "protected-decorated-field",
        "private-decorated-field",
        "public-instance-field",
        "protected-instance-field",
        "private-instance-field",
        "public-abstract-field",
        "protected-abstract-field",
        "private-abstract-field",

        // Constructors
        "public-constructor",
        "protected-constructor",
        "private-constructor",

        // Methods
        "public-static-method",
        "protected-static-method",
        "private-static-method",
        "public-decorated-method",
        "protected-decorated-method",
        "private-decorated-method",
        "public-instance-method",
        "protected-instance-method",
        "private-instance-method",
        "public-abstract-method",
        "protected-abstract-method",
        "private-abstract-method"
        ],
        order: "alphabetically"
      }
    }],
    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/naming-convention": [
      "error", 
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'classProperty',
        modifiers: ['static', 'readonly'],
        format: ['UPPER_CASE']
      },
      {
        selector: 'class',
        modifiers: ['abstract'],
        prefix: ['Abstract'],
        format: ['PascalCase']
      }
    ],
    "@typescript-eslint/no-base-to-string": "warn",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression": "error",
    "@typescript-eslint/no-dynamic-delete": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-extraneous-class": ["error", {
      allowStaticOnly: true,
      allowWithDecorator: true
    }],
    "@typescript-eslint/no-floating-promises": ["error", {
      ignoreVoid: true,
      ignoreIIFE: true
    }],
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-implicit-any-catch": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": ["error", {
      checkConditionals: true,
      checkVoidReturns: true
    }],
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-parameter-properties": ["error", {
      allows: ["readonly"]
    }],
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-type-alias": ["error", {
      allowAliases: "in-unions-and-intersections",
      allowCallbacks: "always",
      allowConditionalTypes: "always",
      allowConstructors: "always",
      allowLiterals: "always",
      allowMappedTypes: "always",
      allowTupleTypes: "always",
    }],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "warn",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-enum-initializers": "off",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/prefer-namespace-keyword": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": "warn",
    "@typescript-eslint/prefer-readonly-parameter-types": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-regexp-exec": "warn",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/sort-type-union-intersection-members": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/unified-signatures": "error",

    ////////////////////////////////////////////////////////////////////////////
    // Extension Rules                                                        //
    ////////////////////////////////////////////////////////////////////////////
    "brace-style": "off",
    "@typescript-eslint/brace-style": ["error"],

    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": ["error", "never"],

    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": ["error"],

    "default-param-last": "off",
    "@typescript-eslint/default-param-last": ["error"],

    "dot-notation": "off",
    "@typescript-eslint/dot-notation": ["error"],

    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": ["error"],

    "indent": "off", // This is handled by prettier

    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": ["error"],

    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": ["error"],

    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": ["error"],

    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": ["error"],

    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-imports": ["error"],

    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["error"],

    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": ["error"],

    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": ["error"],

    "no-implied-eval": "off",
    "@typescript-eslint/no-implied-eval": ["error"],

    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": ["error"],

    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": ["error"],

    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": ["error"],

    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true
      }
    ],

    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": ["error"],

    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],

    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": ["error"],

    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": ["error"],

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],

    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],

    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],

    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],

    "quotes": "off",
    "@typescript-eslint/quotes": ["error", "double"],

    "require-await": "off",
    "@typescript-eslint/require-await": "error",

    "no-return-await": "off",
    "@typescript-eslint/return-await": ["error", "in-try-catch"],

    "semi": "off",
    "@typescript-eslint/semi": ["error"],

    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],

    ////////////////////////////////////////////////////////////////////////////
    // Prettier Rules                                                         //
    ////////////////////////////////////////////////////////////////////////////
    "prettier/prettier": "error",

    ////////////////////////////////////////////////////////////////////////////
    // Import Rules                                                           //
    ////////////////////////////////////////////////////////////////////////////
    "import/no-absolute-path": "error",
    "import/no-self-import": "error",
    "import/no-cycle": "error",
    "import/no-useless-path-segments": "error",
    "import/export": "error",
    "import/no-deprecated": "error",
    "import/no-extraneous-dependencies": ["error", {
      devDependencies: false
    }],
    "import/no-mutable-exports": "error",
    "import/no-unused-modules": "error",
    "import/first": "error",
    "import/exports-last": "error",
    "import/no-duplicates": "error",
    "import/extensions": "error",
    "import/order": "error",
    "import/newline-after-import": "error",
    "import/no-default-export": "error",

    ////////////////////////////////////////////////////////////////////////////
    // Eslint Comment Rules                                                   //
    ////////////////////////////////////////////////////////////////////////////
    "eslint-comments/no-aggregating-enable": "error",
    "eslint-comments/no-duplicate-disable": "error",
    "eslint-comments/no-unlimited-disable": "error",
    "eslint-comments/no-unused-disable": "warn",
    "eslint-comments/no-unused-enable": "warn",
    "eslint-comments/require-description": "error",

    ////////////////////////////////////////////////////////////////////////////
    // Jest Comment Rules                                                     //
    ////////////////////////////////////////////////////////////////////////////
    // TODO: ADD JEST
    // TODO: https://www.npmjs.com/package/eslint-plugin-jest

    ////////////////////////////////////////////////////////////////////////////
    // TS Doc Comment Rules                                                   //
    ////////////////////////////////////////////////////////////////////////////
    "tsdoc/syntax": "warn",
    "jsdoc/require-description": "error",
    "jsdoc/require-jsdoc": "error",
    "jsdoc/require-param-description": "error",
    "jsdoc/require-param-name": "error",
    "jsdoc/require-returns": "error",
  }
};
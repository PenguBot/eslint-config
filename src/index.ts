export const config = {
	parser: "@typescript-eslint/parser",
	extends: "plugin:@typescript-eslint/recommended",
	env: {
		es6: true,
		es2017: true,
		es2020: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		project: "./tsconfig.eslint.json"
	},
	plugins: ["@typescript-eslint"],
	rules: {
		indent: "off",
		"valid-jsdoc": [
			"warn",
			{
				requireReturn: false,
				requireReturnDescription: false,
				preferType: {
					// eslint-disable-next-line @typescript-eslint/naming-convention
					String: "string",
					// eslint-disable-next-line @typescript-eslint/naming-convention
					Number: "number",
					// eslint-disable-next-line @typescript-eslint/naming-convention
					Boolean: "boolean",
					// eslint-disable-next-line @typescript-eslint/naming-convention
					Symbol: "symbol",
					function: "Function",
					object: "Object",
					// eslint-disable-next-line @typescript-eslint/naming-convention
					Date: "date",
					error: "Error"
				}
			}
		],
		"no-extra-parens": "off",
		"accessor-pairs": "warn",
		"array-callback-return": "error",
		complexity: "off",
		curly: [
			"error",
			"multi-line",
			"consistent"
		],
		"dot-location": [
			"error",
			"property"
		],
		"dot-notation": "error",
		eqeqeq: "error",
		"no-console": [
			"error",
			{
				allow: [
					"log",
					"warn",
					"error"
				]
			}
		],
		"no-empty-function": "error",
		"no-floating-decimal": "error",
		"no-implied-eval": "error",
		"no-invalid-this": "error",
		"no-lone-blocks": "error",
		"no-multi-spaces": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-new": "error",
		"no-octal-escape": "error",
		"no-return-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-unmodified-loop-condition": "error",
		"no-unused-expressions": "error",
		"no-useless-call": "error",
		"no-useless-concat": "error",
		"no-useless-escape": "error",
		"no-void": "error",
		"no-warning-comments": "warn",
		"wrap-iife": "error",
		yoda: "error",
		"no-label-var": "error",
		"no-shadow": "error",
		"no-undef-init": "error",
		"callback-return": "error",
		"handle-callback-err": "error",
		"no-mixed-requires": "error",
		"no-new-require": "error",
		"no-path-concat": "error",
		"no-process-env": "error",
		"array-bracket-spacing": "error",
		"block-spacing": "error",
		"brace-style": [
			"error",
			"1tbs",
			{
				allowSingleLine: true
			}
		],
		"comma-dangle": "error",
		"comma-spacing": "error",
		"comma-style": "error",
		"computed-property-spacing": "error",
		"consistent-this": "error",
		"eol-last": "error",
		"func-names": "error",
		"func-style": [
			"error",
			"declaration",
			{
				allowArrowFunctions: true
			}
		],
		"key-spacing": "error",
		"keyword-spacing": [
			"error",
			{
				overrides: {
					if: {
						after: true
					},
					for: {
						after: true
					},
					while: {
						after: true
					},
					catch: {
						after: true
					},
					switch: {
						after: true
					}
				}
			}
		],
		"max-depth": "error",
		"max-len": [
			"error",
			1500,
			2
		],
		"max-nested-callbacks": [
			"error",
			{
				max: 4
			}
		],
		"max-statements-per-line": [
			"error",
			{
				max: 2
			}
		],
		"new-cap": "off",
		"newline-per-chained-call": [
			"error",
			{
				ignoreChainWithDepth: 6
			}
		],
		"no-array-constructor": "error",
		"no-bitwise": "warn",
		"no-inline-comments": "error",
		"no-lonely-if": "error",
		"no-mixed-operators": "error",
		"no-multiple-empty-lines": [
			"error",
			{
				max: 2,
				maxEOF: 1,
				maxBOF: 0
			}
		],
		"no-new-object": "error",
		"no-spaced-func": "error",
		"no-trailing-spaces": "error",
		"no-unneeded-ternary": "error",
		"no-whitespace-before-property": "error",
		"object-curly-newline": "error",
		"object-curly-spacing": [
			"error",
			"always"
		],
		"operator-assignment": "error",
		"operator-linebreak": [
			"error",
			"after"
		],
		"padded-blocks": "off",
		"quote-props": [
			"error",
			"as-needed"
		],
		quotes: [
			"error",
			"double",
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		"semi-spacing": "error",
		semi: "error",
		"space-before-blocks": "error",
		"space-before-function-paren": [
			"error",
			{
				anonymous: "always",
				named: "never",
				asyncArrow: "always"
			}
		],
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": "error",
		"unicode-bom": "error",
		"arrow-body-style": "error",
		"arrow-spacing": "error",
		"no-duplicate-imports": "error",
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-destructuring": [
			"error",
			{
				VariableDeclarator: {
					array: false,
					object: true
				},
				AssignmentExpression: {
					array: true,
					object: true
				}
			},
			{
				enforceForRenamedProperties: false
			}
		],
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"rest-spread-spacing": "error",
		"template-curly-spacing": "error",
		"yield-star-spacing": "error",
		"node/no-missing-require": "off",
		"no-var": "error",
		"arrow-parens": [
			"error",
			"as-needed"
		],
		"@typescript-eslint/no-invalid-void-type": "error",
		"@typescript-eslint/dot-notation": [
			"error",
			{
				allowKeywords: true,
				allowPattern: "(^[A-Z])|(^[a-z]+(_[a-z]+)+$)",
				allowPrivateClassPropertyAccess: true
			}
		],
		"@typescript-eslint/keyword-spacing": [
			"error",
			{
				before: true,
				after: true
			}
		],
		"@typescript-eslint/init-declarations": "error",
		"@typescript-eslint/prefer-reduce-type-parameter": "error",
		"@typescript-eslint/class-literal-property-style": "error",
		"@typescript-eslint/no-base-to-string": "error",
		"@typescript-eslint/switch-exhaustiveness-check": "warn",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"@typescript-eslint/no-dupe-class-members": "error",
		"@typescript-eslint/prefer-as-const": "error",
		"@typescript-eslint/comma-spacing": [
			"error",
			{
				before: false,
				after: true
			}
		],
		"@typescript-eslint/no-extra-non-null-assertion": "error",
		"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "default",
				format: [
					"camelCase"
				],
				leadingUnderscore: "forbid",
				trailingUnderscore: "forbid",
				filter: {
					regex: "^(?:VariableDeclarator|AssignmentExpression)$",
					match: false
				}
			},
			{
				selector: "parameter",
				format: [
					"camelCase"
				],
				leadingUnderscore: "allow"
			},
			{
				selector: "property",
				modifiers: [
					"readonly"
				],
				prefix: [
					"k"
				],
				format: [
					"PascalCase"
				]
			},
			{
				selector: "enumMember",
				format: [
					"PascalCase"
				]
			},
			{
				selector: "typeLike",
				format: [
					"PascalCase"
				]
			}
		],
		"@typescript-eslint/default-param-last": "error",
		"@typescript-eslint/no-extra-semi": "error",
		"@typescript-eslint/no-throw-literal": "error",
		"@typescript-eslint/no-implied-eval": "error",
		"@typescript-eslint/no-invalid-this": "error",
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": "off",
		"@typescript-eslint/await-thenable": "off",
		"@typescript-eslint/explicit-member-accessibility": "error",
		"@typescript-eslint/member-ordering": [
			"error",
			{
				default: [
					"signature",
					"public-instance-field",
					"protected-instance-field",
					"private-instance-field",
					"instance-field",
					"public-constructor",
					"protected-constructor",
					"private-constructor",
					"constructor",
					"public-instance-method",
					"protected-instance-method",
					"private-instance-method",
					"instance-method",
					"public-static-field",
					"protected-static-field",
					"private-static-field",
					"static-field",
					"public-static-method",
					"protected-static-method",
					"private-static-method",
					"static-method"
				]
			}
		],
		"for-direction": "off",
		"getter-return": "off",
		"no-await-in-loop": "off",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "warn",
		"no-constant-condition": "off",
		"no-control-regex": "off",
		"no-debugger": "error",
		"no-dupe-args": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-empty": "off",
		"no-empty-character-class": "error",
		"no-ex-assign": "off",
		"no-extra-boolean-cast": "off",
		"no-extra-semi": "off",
		"no-func-assign": "off",
		"no-inner-declarations": "off",
		"no-invalid-regexp": "warn",
		"no-irregular-whitespace": [
			"error",
			{
				skipStrings: true,
				skipComments: true,
				skipRegExps: true,
				skipTemplates: true
			}
		],
		"no-obj-calls": "warn",
		"no-prototype-builtins": "off",
		"no-regex-spaces": "warn",
		"no-sparse-arrays": "warn",
		"no-template-curly-in-string": "error",
		"no-unexpected-multiline": "error",
		"no-unreachable": "warn",
		"no-unsafe-finally": "warn",
		"no-unsafe-negation": "error",
		"use-isnan": "error",
		"valid-typeof": "error",
		"block-scoped-var": "error",
		"class-methods-use-this": "off",
		"consistent-return": "off",
		"default-case": "off",
		"guard-for-in": "warn",
		"no-alert": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-div-regex": "off",
		"no-else-return": "warn",
		"no-empty-pattern": "off",
		"no-eq-null": "warn",
		"no-eval": "warn",
		"no-extend-native": "warn",
		"no-extra-bind": "off",
		"no-extra-label": "warn",
		"no-fallthrough": "off",
		"no-global-assign": "off",
		"no-implicit-coercion": "error",
		"no-implicit-globals": "off",
		"no-iterator": "off",
		"no-labels": "off",
		"no-loop-func": "off",
		"no-magic-numbers": "off",
		"no-multi-str": "error",
		"no-octal": "error",
		"no-param-reassign": "off",
		"no-proto": "off",
		"no-redeclare": "error",
		"no-restricted-properties": "off",
		"no-return-await": "warn",
		"no-script-url": "off",
		"no-self-assign": "error",
		"no-throw-literal": "off",
		"no-unused-labels": "error",
		"no-useless-return": "warn",
		"no-with": "error",
		"prefer-promise-reject-errors": "error",
		radix: "error",
		"require-await": "off",
		"vars-on-top": "off",
		strict: [
			"error",
			"never"
		],
		"init-declarations": "off",
		"no-catch-shadow": "error",
		"no-delete-var": "error",
		"no-restricted-globals": "off",
		"no-shadow-restricted-names": "error",
		"no-undef": "error",
		"no-undefined": "off",
		"no-unused-vars": "off",
		"no-use-before-define": "off",
		"global-require": "off",
		"no-buffer-constructor": "error",
		"no-process-exit": "off",
		"no-restricted-modules": "off",
		"no-sync": "off",
		"array-bracket-newline": [
			"error",
			"consistent"
		],
		"array-element-newline": "off",
		"capitalized-comments": "off",
		"func-call-spacing": [
			"error",
			"never"
		],
		"func-name-matching": [
			"warn",
			"always"
		],
		"function-paren-newline": [
			"error",
			"consistent"
		],
		"id-blacklist": "off",
		"id-length": "off",
		"id-match": "off",
		"jsx-quotes": [
			"error",
			"prefer-double"
		],
		"line-comment-position": "off",
		"lines-around-comment": "off",
		"lines-between-class-members": [
			"error",
			"always",
			{
				exceptAfterSingleLine: true
			}
		],
		"max-lines": "off",
		"max-params": "off",
		"max-statements": "off",
		"multiline-comment-style": "off",
		"multiline-ternary": [
			"error",
			"always-multiline"
		],
		"new-parens": "error",
		"no-mixed-spaces-and-tabs": [
			"error",
			"smart-tabs"
		],
		"no-multi-assign": "warn",
		"no-negated-condition": "warn",
		"no-nested-ternary": "off",
		"no-plusplus": "off",
		"no-restricted-syntax": "off",
		"no-tabs": "off",
		"no-ternary": "off",
		"no-underscore-dangle": "off",
		"nonblock-statement-body-position": "off",
		"object-property-newline": "off",
		"one-var": [
			"error",
			"never"
		],
		"one-var-declaration-per-line": "off",
		"padding-line-between-statements": "off",
		"require-jsdoc": "off",
		"semi-style": [
			"error",
			"last"
		],
		"sort-keys": "off",
		"sort-vars": "off",
		"switch-colon-spacing": [
			"error",
			{
				after: true,
				before: false
			}
		],
		"template-tag-spacing": [
			"error",
			"never"
		],
		"wrap-regex": "off",
		"constructor-super": "error",
		"generator-star-spacing": [
			"error",
			"before"
		],
		"no-class-assign": "warn",
		"no-confusing-arrow": "off",
		"no-const-assign": "error",
		"no-dupe-class-members": "off",
		"no-new-symbol": "warn",
		"no-restricted-imports": "off",
		"no-this-before-super": "error",
		"no-useless-rename": "error",
		"object-shorthand": [
			"error",
			"always"
		],
		"prefer-numeric-literals": "off",
		"require-yield": "warn",
		"sort-imports": "off",
		"symbol-description": "warn",
		"@typescript-eslint/require-await": "error",
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/unbound-method": "error",
		"@typescript-eslint/prefer-includes": "error",
		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/no-empty-interface": "off",
		"@typescript-eslint/no-extraneous-class": "error",
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-useless-constructor": "error",
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/consistent-type-definitions": "error",
		"@typescript-eslint/promise-function-async": "off",
		"@typescript-eslint/restrict-plus-operands": "error",
		"@typescript-eslint/type-annotation-spacing": "error",
		"@typescript-eslint/unified-signatures": "error",
		"@typescript-eslint/semi": "error",
		"@typescript-eslint/no-unsafe-member-access": "off",
		"@typescript-eslint/no-unsafe-call": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-return": "off",
		"@typescript-eslint/ban-ts-comment": [
			"error",
			{
				"ts-expect-error": "allow-with-description",
				"ts-ignore": "allow-with-description",
				"ts-nocheck": true,
				"ts-check": true,
				minimumDescriptionLength: 3
			}
		]
	}
};

module.exports = config;
export default config;

module.exports = {
	plugins: ["react", "prettier"],
	extends: [
		"eslint:recommended",
		"prettier",
		"plugin:react/recommended",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: "module",
	},
	settings: {
		react: {
			version: "detect"
		}
	},
	rules: {
		"prettier/prettier": ["error", { usePrettierrc: true }],
		"no-param-reassign": "off",
		camelcase: [1, { properties: "never" }],
		"no-console": 2,
		"react/prop-types": 0
	},
};

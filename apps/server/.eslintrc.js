module.exports = {
	extends: ['@mean-example-project/eslint-config-shared'],
	env: {
		es2023: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	}
};

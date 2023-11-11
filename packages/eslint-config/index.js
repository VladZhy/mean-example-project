module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'prettier' // make sure "prettier" is last
	],
	rules: {
		'no-console': 1,
		'@typescript-eslint/no-explicit-any': 2
	}
};

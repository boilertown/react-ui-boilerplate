module.exports = {
	preset: 'ts-jest',
	verbose: true,
	testEnvironment: 'jsdom',
	collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}'],
	modulePaths: ['<rootDir>/src'],
	modulePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/'],
	setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.[jt]s?(x)',
		'<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)',
	],
	transform: {
		'\\.(jpg|jpeg|png|eot|otf|webp|svg|ttf|woff|woff2|webm)$':
			'jest-transform-stub',
	},
};

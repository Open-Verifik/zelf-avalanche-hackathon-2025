export default {
	testEnvironment: "node",
	testMatch: ["**/tests/**/*.test.js"],
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageReporters: ["text", "lcov"],
	verbose: true,
	transform: {},
};

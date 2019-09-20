module.exports = {
    testEnvironment: "node",
    bail: false,
    verbose: true,
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testMatch: ["**/*.test.ts"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverage: false,
    coverageDirectory: "<rootDir>/.coverage",
    collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**"],
    coverageReporters: ["json", "lcov", "text", "clover", "html"],
    watchman: false,
    setupFilesAfterEnv: ["jest-extended"],
};

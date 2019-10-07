module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2, "always", [
                "chore",
                "ci",
                "docs",
                "feat",
                "fix",
                "perf",
                "polish",
                "refactor",
                "release",
                "style",
                "test",
                "types",
                "workflow",
            ]
        ]
    }
};

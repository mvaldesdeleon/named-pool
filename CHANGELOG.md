# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.1.0"></a>

# [2.1.0](https://github.com/mvaldesdeleon/named-pool/compare/2.0.0...2.1.0) (2018-10-26)

### Bug Fixes

-   **package.json:** install works without git ([a9f16e9](https://github.com/mvaldesdeleon/named-pool/commit/a9f16e9))

### Features

-   **module:** merge branch 'develop' ([4941fb8](https://github.com/mvaldesdeleon/named-pool/commit/4941fb8))

<a name="2.0.0"></a>

# 2.0.0 (2018-08-01)

### Features

-   **module:** action now receives key as argument ([245148d](https://github.com/mvaldesdeleon/named-pool/commit/245148d))
-   **module:** initial implementation ([22bb0b9](https://github.com/mvaldesdeleon/named-pool/commit/22bb0b9))
-   **project:** initial commit ([9e1eca7](https://github.com/mvaldesdeleon/named-pool/commit/9e1eca7))
-   **tsconfig.json:** add es2017 support ([89a161b](https://github.com/mvaldesdeleon/named-pool/commit/89a161b))

### BREAKING CHANGES

-   **module:** first argument to `action` is now the resource key, followed by the remaining old
    arguments in order

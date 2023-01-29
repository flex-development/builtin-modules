# builtin-modules

[![npm](https://img.shields.io/npm/v/@flex-development/builtin-modules.svg)](https://npmjs.com/package/@flex-development/builtin-modules)
[![codecov](https://codecov.io/github/flex-development/builtin-modules/branch/main/graph/badge.svg?token=Rh9xvcgqdD)](https://codecov.io/github/flex-development/builtin-modules)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/builtin-modules.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

Universal drop-in replacement for [`module.builtinModules`][1]

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Types](#types)
- [Related](#related)
- [Contribute](#contribute)

## What is this?

This package is a universal drop-in replacement for the [`builtinModules`][1] constant exported by [`node:module`][2].

## When should I use this?

This package exports an array containing all modules provided by Node.js. It can be used to not only verify a Node.js
module, but to also determine if a module can be imported using the [`node:`][3] protocol.

## Install

This package is [ESM only][4].

```sh
yarn add @flex-development/builtin-modules
```

From Git:

```sh
yarn add @flex-development/builtin-modules@flex-development/builtin-modules
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/features/protocols#git'>Git - Protocols | Yarn</a>
    &nbsp;for details on requesting a specific branch, commit, or tag.
  </small>
</blockquote>

## Use

**TODO**: usage example.

## API

**TODO**: api documentation.

## Types

This package is fully typed with [TypeScript][5].

## Related

- [`is-builtin`][6] &mdash; Universal drop-in replacement for [`module.isBuiltin`][7]

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

[1]: https://nodejs.org/api/module.html#modulebuiltinmodules
[2]: https://nodejs.org/api/module.html
[3]: https://nodejs.org/api/esm.html#node-imports
[4]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[5]: https://www.typescriptlang.org
[6]: https://github.com/flex-development/is-builtin
[7]: https://nodejs.org/api/module.html#moduleisbuiltinmodulename

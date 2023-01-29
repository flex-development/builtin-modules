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
  - [`builtinModules`](#builtinmodules)
- [Types](#types)
- [Related](#related)
- [Contribute](#contribute)

## What is this?

This package is a universal drop-in replacement for the [`builtinModules`][1] constant exported by [`node:module`][2].

## When should I use this?

This package exports an array containing the names of modules provided by Node.js. It can be used to not only verify
that a module is maintained by Node.js, but to also determine if a module can be imported using a [`node:` URL][3].

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

```typescript
import { builtinModules } from '@flex-development/builtin-modules'

/**
 * Set containing the names of modules provided by Node.js.
 *
 * **Note**: Includes [`node:` URLs][1].
 *
 * [1]: https://nodejs.org/api/esm.html#node-imports
 *
 * @const {Set<string>} BUILTIN_MODULES
 */
const BUILTIN_MODULES = new Set(builtinModules.flatMap(m => [m, 'node:' + m]))

/**
 * Checks if the given module `name` is the name of a [builtin module][1].
 *
 * Allows for [`node:` URLs][2].
 *
 * [1]: https://nodejs.org/api/esm.html#builtin-modules
 * [2]: https://nodejs.org/api/esm.html#node-imports
 *
 * @example
 *  isBuiltin('node:module') // true
 * @example
 *  isBuiltin('fs/promises') // true
 * @example
 *  isBuiltin('@flex-development/builtin-modules') // false
 *
 * @param {string} name - Module name to evaluate
 * @return {boolean} `true` if `name` is name of builtin module
 */
const isBuiltin = (name: string): boolean => BUILTIN_MODULES.has(name)

console.debug(isBuiltin('node:module'))
console.debug(isBuiltin('fs/promises'))
console.debug(isBuiltin('@flex-development/builtin-modules'))
```

## API

This package exports the identifier `builtinModules`.

There is no default export.

### `builtinModules`

An array containing the names of modules provided by Node.js.

The array is a **superset** of [`module.builtinModules`][1] given the running version of Node.js.

Possible use cases:

- Check if a module can be imported using a [`node:` URL][3]
- Check if a module is maintained by Node.js

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

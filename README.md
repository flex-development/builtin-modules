# builtin-modules

[![github release](https://img.shields.io/github/v/release/flex-development/builtin-modules.svg?include_prereleases\&sort=semver)](https://github.com/flex-development/builtin-modules/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/builtin-modules.svg)](https://npmjs.com/package/@flex-development/builtin-modules)
[![codecov](https://codecov.io/github/flex-development/builtin-modules/branch/main/graph/badge.svg?token=Rh9xvcgqdD)](https://codecov.io/github/flex-development/builtin-modules)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/builtin-modules.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat\&logo=vitest\&logoColor=ffffff)](https://vitest.dev)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

Universal drop-in replacement for [`module.builtinModules`][modulebuiltinmodules]

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

This package is a universal drop-in replacement for the [`builtinModules`][modulebuiltinmodules] constant exported by
[`node:module`][node-module].

## When should I use this?

This package exports an array containing the names of modules provided by Node.js.
It can be used to not only verify that a module is maintained by Node.js, but to also determine if a module can be
imported using a [`node:` URL][node-imports].

## Install

This package is [ESM only][esm].

In Node.js (version 18+) with [yarn][]:

```sh
yarn add @flex-development/builtin-modules
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { builtinModules } from 'https://esm.sh/@flex-development/builtin-modules'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { builtinModules } from 'https://esm.sh/@flex-development/builtin-modules'
</script>
```

## Use

```ts
import { builtinModules } from '@flex-development/builtin-modules'

/**
 * List of all modules provided by Node.js.
 *
 * > 👉 **Note**: Includes modules available only under the `node:` scheme (i.e.
 * > `node:sea`, `node:sqlite`, `node:test`).
 *
 * @const {string[]} builtins
 */
const builtins: string[] = [
  ...builtinModules,
  'node:sea',
  'node:test',
  'node:sqlite'
]

/**
 * Set of all modules provided by Node.js.
 *
 * > 👉 **Note**: Includes `node:` URLs.
 *
 * @const {Set<string>} BUILTIN_MODULES
 */
const BUILTIN_MODULES: Set<string> = new Set(builtins.flatMap(m => {
  return m.startsWith('node:') ? [m] : [m, 'node:' + m]
}).sort((a, b) => a.localeCompare(b)))

/**
 * Check if `m` references a [builtin module][builtin-module].
 *
 * [builtin-module]: https://nodejs.org/api/esm.html#builtin-modules
 *
 * @example
 *  isBuiltin('@flex-development/builtin-modules') // false
 * @example
 *  isBuiltin('assert') // true
 * @example
 *  isBuiltin('fs/promises') // true
 * @example
 *  isBuiltin(new URL('node:os')) // true
 * @example
 *  isBuiltin('node:module') // true
 * @example
 *  isBuiltin('node:test/reporters') // true
 * @example
 *  isBuiltin('test') // false
 *
 * @param {unknown} m
 *  The thing to check
 * @return {boolean}
 *  `true` if `m` references builtin module, `false` otherwise
 */
function isBuiltin(m: unknown): boolean {
  return BUILTIN_MODULES.has(String(m))
}

console.log(isBuiltin('@flex-development/builtin-modules'))
console.log(isBuiltin('assert'))
console.log(isBuiltin('fs/promises'))
console.log(isBuiltin('node:module'))
console.log(isBuiltin('node:test/reporters'))
console.log(isBuiltin('test'))
```

## API

This package exports the identifier [`builtinModules`](#builtinmodules).

The default export is also `builtinModules`.

### `builtinModules`

List of all modules provided by Node.js.

The list is a **superset** of [`module.builtinModules`][modulebuiltinmodules] given the running version of Node.js.

> 👉 **Note**: Modules available only under the `node:` scheme (i.e. `node:sea`, `node:sqlite`, `node:test`) are not
> listed.

## Types

This package is fully typed with [TypeScript][].

## Related

- [`is-builtin`][is-builtin] — Universal drop-in replacement for [`module.isBuiltin`][node-module-is-builtin]

## Contribute

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

This project has a [code of conduct](./CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[is-builtin]: https://github.com/flex-development/is-builtin

[modulebuiltinmodules]: https://nodejs.org/api/module.html#modulebuiltinmodules

[node-imports]: https://nodejs.org/api/esm.html#node-imports

[node-module-is-builtin]: https://nodejs.org/api/module.html#moduleisbuiltinmodulename

[node-module]: https://nodejs.org/api/module.html

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com

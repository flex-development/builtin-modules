/**
 * @file builtinModules
 * @module builtin-modules/builtinModules
 */

/**
 * List of all modules provided by Node.js.
 * The list is a **superset** of [`module.builtinModules`][modulebuiltinmodules]
 * given the running version of Node.js.
 *
 * > 👉 **Note**: Modules available only under the `node:` scheme (i.e.
 * > `node:sea`, `node:sqlite`, `node:test`) are not listed.
 *
 * [modulebuiltinmodules]: https://nodejs.org/api/module.html#modulebuiltinmodules
 *
 * @const {string[]} builtinModules
 */
const builtinModules: string[] = [
  '_http_agent',
  '_http_client',
  '_http_common',
  '_http_incoming',
  '_http_outgoing',
  '_http_server',
  '_stream_duplex',
  '_stream_passthrough',
  '_stream_readable',
  '_stream_transform',
  '_stream_wrap',
  '_stream_writable',
  '_tls_common',
  '_tls_wrap',
  'assert',
  'assert/strict',
  'async_hooks',
  'buffer',
  'child_process',
  'cluster',
  'console',
  'constants',
  'crypto',
  'dgram',
  'diagnostics_channel',
  'dns',
  'dns/promises',
  'domain',
  'events',
  'fs',
  'fs/promises',
  'http',
  'http2',
  'https',
  'inspector',
  'inspector/promises',
  'module',
  'net',
  'os',
  'path',
  'path/posix',
  'path/win32',
  'perf_hooks',
  'process',
  'punycode',
  'querystring',
  'readline',
  'readline/promises',
  'repl',
  'stream',
  'stream/consumers',
  'stream/promises',
  'stream/web',
  'string_decoder',
  'sys',
  'test/reporters',
  'timers',
  'timers/promises',
  'tls',
  'trace_events',
  'tty',
  'url',
  'util',
  'util/types',
  'v8',
  'vm',
  'wasi',
  'worker_threads',
  'zlib'
]

export default builtinModules

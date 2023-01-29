/**
 * @file builtinModules
 * @module builtin-modules/builtinModules
 */

/**
 * Array containing the names of modules provided by Node.js.
 *
 * The array is a **superset** of [`module.builtinModules`][1] given the running
 * version of Node.js.
 *
 * Possible use cases:
 *
 * - Check if a module can be imported using a [`node:` URL][2]
 * - Check if a module is maintained by Node.js
 *
 * [1]: https://nodejs.org/api/module.html#modulebuiltinmodules
 * [2]: https://nodejs.org/api/esm.html#node-imports
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
  'worker_threads',
  'zlib'
]

export default builtinModules

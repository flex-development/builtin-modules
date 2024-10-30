/**
 * @file Type Tests - builtinModules
 * @module builtin-modules/tests/unit-d/builtinModules
 */

import type testSubject from '../builtin-modules.mts'

describe('unit-d:builtinModules', () => {
  it('should be string[]', () => {
    expectTypeOf<typeof testSubject>().toEqualTypeOf<string[]>()
  })
})

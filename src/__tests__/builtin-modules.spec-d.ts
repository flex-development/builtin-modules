/**
 * @file Type Tests - builtinModules
 * @module builtin-modules/tests/unit-d/builtinModules
 */

import type testSubject from '../builtin-modules'

describe('unit-d:builtinModules', () => {
  it('should equal type of string[]', () => {
    expectTypeOf<typeof testSubject>().toEqualTypeOf<string[]>()
  })
})

/**
 * @file Unit Tests - builtinModules
 * @module builtin-modules/tests/unit/builtinModules
 */

import module from 'node:module'
import testSubject from '../builtin-modules.mts'

describe('unit:builtinModules', () => {
  it('should include all members of `module.builtinModules`', () => {
    expect(testSubject).to.include.members(module.builtinModules)
  })
})

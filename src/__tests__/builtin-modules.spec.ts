/**
 * @file Unit Tests - builtinModules
 * @module builtin-modules/tests/unit/builtinModules
 */

import module from 'node:module'
import testSubject from '../builtin-modules'

describe('unit:builtinModules', () => {
  it('should be superset of module.builtinModules', () => {
    expect(testSubject).to.include.members(module.builtinModules)
  })
})

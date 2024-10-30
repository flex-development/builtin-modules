/**
 * @file E2E Tests - api
 * @module builtin-modules/tests/e2e/api
 */

import * as testSubject from '@flex-development/builtin-modules'

describe('e2e:builtin-modules', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).eql(['builtinModules', 'default'])
  })
})

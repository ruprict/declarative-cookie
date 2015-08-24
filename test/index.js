/**
 * Imports
 */

import test from 'tape'
import cookie from '..'

/**
 * Tests
 */

test('should work', ({deepEqual, end}) => {
  deepEqual(cookie('test').toJSON(), {type: 'EFFECT', payload: {type: 'GET_COOKIE', name: 'test'}, meta: {then: []}})
  deepEqual(cookie('test', 'testing').toJSON(), {type: 'EFFECT', payload: {type: 'SET_COOKIE', name: 'test', value: 'testing'}, meta: {then: []}})
  end()
})

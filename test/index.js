/**
 * Imports
 */

import test from 'tape'
import cookie from '../src'
import createEffect from 'declarative-effect'

/**
 * Tests
 */

test('should work', ({deepEqual, end}) => {
  deepEqual(cookie('test'), createEffect({type: 'GET_COOKIE', name: 'test'}))
  deepEqual(cookie('test', 'testing'), createEffect({type: 'SET_COOKIE', name: 'test', value: 'testing'}))
  end()
})

/**
 * Imports
 */

import test from 'tape'
import cookie from '../src'

/**
 * Tests
 */

test('should work', ({deepEqual, end}) => {
  deepEqual(cookie('test').payload, {type: 'GET_COOKIE', name: 'test'})
  deepEqual(cookie('test', 'testing').payload, {type: 'SET_COOKIE', name: 'test', value: 'testing'})
  deepEqual(cookie('test', 'testing', {path: '/'}).payload, {type: 'SET_COOKIE', name: 'test', value: 'testing', meta: {path: '/'}})
  end()
})

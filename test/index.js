/**
 * Imports
 */

import test from 'tape'
import cookie from '../src'

/**
 * Tests
 */

test('should work', ({deepEqual, end}) => {
  deepEqual(cookie('test'), {type: 'GET_COOKIE', payload: {name: 'test'}})
  deepEqual(cookie('test', 'testing'), {type: 'SET_COOKIE', payload: {name: 'test', value: 'testing', opts: {}}})
  deepEqual(cookie('test', 'testing', {path: '/'}), {type: 'SET_COOKIE', payload: {name: 'test', value: 'testing', opts: {path: '/'}}})
  end()
})

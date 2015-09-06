/**
 * Imports
 */

import test from 'tape'
import _cookie from '../src'

/**
 * Tests
 */

test('should work', ({deepEqual, end}) => {
  deepEqual(cookie('test'), {type: 'GET_COOKIE', name: 'test'})
  deepEqual(cookie('test', 'testing'), {type: 'SET_COOKIE', name: 'test', value: 'testing'})
  deepEqual(cookie('test', 'testing', {path: '/'}), {type: 'SET_COOKIE', name: 'test', value: 'testing', meta: {path: '/'}})
  end()
})

function cookie (...args) {
  return _cookie(...args).toJSON().payload
}

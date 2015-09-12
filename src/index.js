/**
 * Cookie action creator
 */

function cookie (name, value, opts={}) {
  return arguments.length > 1
    ? {type: 'SET_COOKIE', payload: {name, value, opts}}
    : {type: 'GET_COOKIE', payload: {name}}
}

/**
 * Exports
 */

export default cookie

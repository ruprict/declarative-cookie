/**
 * Imports
 */

var DeclarativePromise = require('declarative-promise')

/**
 * Cookie action creator
 */

function cookie (name, value) {
  var effect = {name: name}
  var action = {type: 'EFFECT', payload: effect}

  if (arguments.length === 2) {
    effect.type = 'SET_COOKIE'
    effect.value = value
  } else {
    effect.type = 'GET_COOKIE'
  }

  return new DeclarativePromise(action)
}

/**
 * Exports
 */

module.exports = cookie

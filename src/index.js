/**
 * Imports
 */

import DeclarativePromise from 'declarative-promise'

/**
 * Cookie action creator
 */

function cookie (name, value) {
  const effect = {name}
  const action = {type: 'EFFECT', payload: effect}

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

export default cookie

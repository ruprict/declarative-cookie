/**
 * Imports
 */

import createEffect from 'declarative-effect'

/**
 * Cookie action creator
 */

function cookie (name, value) {
  const effect = {name}

  if (arguments.length === 2) {
    effect.type = 'SET_COOKIE'
    effect.value = value
  } else {
    effect.type = 'GET_COOKIE'
  }

  return createEffect(effect)
}

/**
 * Exports
 */

export default cookie

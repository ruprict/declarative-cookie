/**
 * Cookie action creator
 */

function cookie (name, value, opts) {
  const effect = {name}

  if (arguments.length > 1) {
    if (opts) effect.meta = opts
    effect.type = 'SET_COOKIE'
    effect.value = value
  } else {
    effect.type = 'GET_COOKIE'
  }

  return {
    type: 'EFFECT',
    payload: effect
  }
}

/**
 * Exports
 */

export default cookie

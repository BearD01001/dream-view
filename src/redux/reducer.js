import constants from './constants'

function reducer (state, action) {
  switch (action) {
    case constants.MAP: {
      return Object.assign({}, state, {
        newStateProp: 1
      })
    }
    default: {
      return state
    }
  }
}
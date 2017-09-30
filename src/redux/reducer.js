import { TOGGLE_SETTING } from './actions'

function reducer (state, action) {
  switch (action) {
    case TOGGLE_SETTING: {
      return Object.assign({}, state, {
        settingDialog: action.status
      })
    }
    default: {
      return state
    }
  }
}

export default reducer

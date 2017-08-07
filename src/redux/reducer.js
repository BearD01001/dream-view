import constants from './constants'

function reducer (state, action) {
  switch (action) {
    case constants.OPEN_SETTING_DIALOG: {
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

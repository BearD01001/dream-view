import constants from './constants'

const actions = {
  settingDialog (status) {
    return {
      type: constants.SETTING_DIALOG,
      status
    }
  }
}

store.dispatch(settingDialog(true))

export default actions

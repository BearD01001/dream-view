function reducer (state, action) {
  switch (action) {
    case 'SETTING_DIALOG': {
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

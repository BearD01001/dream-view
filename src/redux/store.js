import  { createStore } from 'redux'
import reducer from './reducer'

function configureStore (initialState = {
  settingDialog: false
}) {
  return createStore(reducer, initialState)
}

export default configureStore

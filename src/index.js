import React from 'react'
import ReactDOM from 'react-dom'
import Index from './components/index'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './redux/store'
import { Provider } from 'react-redux'
import 'typeface-roboto'
import './assets/reset.css'

let initailState = {
  settingDialog: false
}
let store = configureStore(initailState)

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

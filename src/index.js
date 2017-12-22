import React from 'react'
import ReactDOM from 'react-dom'
import Index from './components/index'
import registerServiceWorker from './registerServiceWorker'
import store from './redux/store'
import { Provider } from 'react-redux'
import 'typeface-roboto'
import './assets/reset.css'

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

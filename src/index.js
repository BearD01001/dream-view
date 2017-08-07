import React from 'react'
import ReactDOM from 'react-dom'
import Index from './components/index'
import registerServiceWorker from './registerServiceWorker'
import 'element-theme-default'

ReactDOM.render(<Index />, document.getElementById('root'))
registerServiceWorker()

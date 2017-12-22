import  {
  applyMiddleware,
  compose,
  createStore,
} from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, { settingDialog: false }, composeEnhancers(
  applyMiddleware(logger)
))

export default store

import { createStore, applyMiddleware } from 'redux'
import appReducer from './redux'
import thunk from 'redux-thunk' 
import { createLogger } from 'redux-logger'

const store = createStore(appReducer, applyMiddleware(thunk, createLogger({collapsed: true})));

export default store
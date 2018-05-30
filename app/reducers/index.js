import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import basic from './basic'

export default combineReducers({
  basic,
  router: routerReducer
})

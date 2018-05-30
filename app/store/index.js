import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createHashHistory'
import reducers from '@/reducers'

export const history = createHistory()

export const store = createStore(
  reducers,
  applyMiddleware(routerMiddleware)
)

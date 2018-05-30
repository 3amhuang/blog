import {
  APP_LOAD,
  REDIRECT
} from '@/store/actionTypes'

const defaultState = {
  appName: '',
  token: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
      }
    case REDIRECT:
      return {
        ...state, redirectTo: null
      }
    default:
      return state
  }
}

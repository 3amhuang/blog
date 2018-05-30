import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { store } from '@/store'
import { push } from 'react-router-redux'
import { APP_LOAD, REDIRECT } from '@/store/actionTypes'

import Login from '@/views/Login'
import Index from '@/views/Index'

const mapStateToProps = state => {
  return {
    appLoaded: state.basic.appLoaded,
    appName: state.basic.appName,
    redirectTo: state.basic.redirectTo
  }
}

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) => 
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () => 
    dispatch({ type: REDIRECT })
})

class App extends React.Component {
  componentWillReceiveProps (nextProps) {
    if (nextProps.redirectTo) {
      store.dispatch(push(nextProps.redirectTo))
      this.props.onRedirect()
    }
  }

  componentWillMount () {
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Index}></Route>
          <Route path='/login' component={Login}></Route>
        </Switch>
      </div>
    )
  }
}

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App))

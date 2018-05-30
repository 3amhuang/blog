import React from 'react'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    console.log('login')
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <div>
        Time: { this.state.date.toLocaleTimeString() }
      </div>
    )
  }
}

export default Login

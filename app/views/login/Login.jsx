import React from 'react'
import { connect } from 'react-redux'
import { login } from '@/api'
import style from './index.css'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleChange (event) {
    const target = event.target
    const name = target.name
    this.setState({
      [name]: target.value
    })
  }

  async handleLogin (event) {
    event.preventDefault()
    const data = this.state
    const res = await login(data)
    console.log(res)
  }

  render () {
    return (
      <div>
        <div className={style.loginBox}>
          <p>
            { 'Dont be good be great.'.toUpperCase()}
          </p>

          <form className={style.loginForm}>
            账号:
            <input
              name="username"
              value={this.state.username}
              className={style.loginInput}
              onChange={this.handleChange}
              type="text"
              placeholder="Username/Phone/Email"/>
            <br />
            密码:
            <input
              name="password"
              value={this.state.password}
              className={style.loginInput}
              onChange={this.handleChange}
              type="password"
              placeholder="Password"/>
            <button onClick={this.handleLogin} className={style.loginButton}>登录</button>
            <div className={style.bottomPane}>
              <button className={style.forgotButton}>忘记密码?</button>
            </div>
          </form>

        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

import React from 'react'
import { connect } from 'react-redux'
import style from './index.css'

const mapStateToProps = state => ({
})

const mapDispatchToProps = state => ({
})

class Navbar extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className={ style.navbar }>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

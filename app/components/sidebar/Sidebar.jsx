import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import style from './index.css'

const mapStateToProps = state => ({
})

const mapDispatchToProps = state => ({
})

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={style.sidebar}>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

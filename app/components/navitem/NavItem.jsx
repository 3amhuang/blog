import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
}

const mapDispatchToProps = dispatch => {
}

class NavItem extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <img src={this.props.image} alt="img">
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export connect(mapStateToProps, mapDispatchToProps)(NavItem)

import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ ...state.auth })

const mapDispatchToProps = dispatch => ({
})

class Index extends React.Component {
  render() {
    return (
      <div>
        Index Page
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)

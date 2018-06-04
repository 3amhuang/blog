import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ ...state.auth })

const mapDispatchToProps = dispatch => ({
})

class Index extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)

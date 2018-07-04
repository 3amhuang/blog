import React from 'react'
import Navbar from '@/components/adminnav/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

class Admin extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Navbar />
        <Sidebar />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)

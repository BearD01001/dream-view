import React, { Component } from 'react'
import { connect } from 'react-redux'

import Landscape from './landscape'
import SearchBar from './search-bar'
import Clock from './clock'
import Toolbar from './toolbar'

class Index extends Component {
  render() {
    return (
      <div>
        <Landscape />
        <SearchBar />
        <Toolbar />
        <Clock />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Index)
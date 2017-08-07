import React, { Component } from 'react'

import Landscape from './landscape'
import SearchBar from './search-bar'
import Clock from './clock'

class Index extends Component {
  render() {
    return (
      <div>
        <Landscape />
        <SearchBar />       
        <Clock />  
      </div>
    )
  }
}

export default Index
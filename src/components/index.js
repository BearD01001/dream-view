import React, { Component } from 'react'
import { connect } from 'react-redux'

import Landscape from './landscape'
import SearchBar from './search-bar'
import Clock from './clock'
import Toolbar from './toolbar'
import SettingDialog from './setting-dialog'

import { toggleSetting } from '../redux/actions'

const mapToProps = state => {
  return {
    toggleSetting: state.toggleSetting,
    onToggleSetting: toggleSetting(state.toggleSetting),
  }
}

@connect(mapToProps)
class Index extends Component {
  render() {
    const { dispatch } = this.props

    return [
      <Landscape />,
      <SearchBar />,
      <Toolbar />,
      <Clock />,
      <SettingDialog
        onToggleSetting={status =>
          dispatch(toggleSetting(status))
        } />,
    ]
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Index)
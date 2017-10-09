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
    settingDialogStatus: state.settingDialog,
    onToggleSetting: toggleSetting(state.settingDialog),
  }
}

@connect(mapToProps)
class Index extends Component {
  render() {
    const {
      dispatch,
      settingDialogStatus,
    } = this.props
    const dispatchHelper = status => dispatch(toggleSetting(status))

    return [
      <Landscape />,
      <SearchBar />,
      <Toolbar
        onToggleSetting={dispatchHelper} />,
      <Clock />,
      <SettingDialog
        settingDialogStatus={settingDialogStatus}
        onToggleSetting={dispatchHelper} />,
    ]
  }
}

export default Index

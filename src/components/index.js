import React, { Component } from 'react'
import { connect } from 'react-redux'

import Landscape from './landscape'
import SearchBar from './search-bar'
import Clock from './clock'
import Toolbar from './toolbar'
import SettingDialog from './setting-dialog'

import { toggleSetting } from '../redux/actions'

import { defaultSetting } from '../config'
import { getSetting } from '../utils'

const mapToProps = state => {
  return {
    settingDialogStatus: state.settingDialog,
    onToggleSetting: toggleSetting(state.settingDialog),
  }
}

@connect(mapToProps)
class Index extends Component {
  constructor (props) {
    super(props)
    this.visionConf  = getSetting('vision')  || defaultSetting.vision
    this.searchConf  = getSetting('search')  || defaultSetting.search
    this.weatherConf = getSetting('weather') || defaultSetting.weather
  }

  render() {
    const {
      dispatch,
      settingDialogStatus,
    } = this.props
    const dispatchHelper = status => dispatch(toggleSetting(status))

    return [
      <Landscape />,
      <SearchBar
        setting={this.searchConf} />,
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

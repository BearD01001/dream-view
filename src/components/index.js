import React, { Component } from 'react'
import { connect } from 'react-redux'

import ThemeProvider from './themeProvider'
import Landscape from './landscape'
import SearchBar from './searchBar'
import Clock from './clock'
import Toolbar from './toolbar'
import SettingDialog from './settingDialog'
import Weather from './weather'

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
      <Landscape key='ls' />,
      <SearchBar
        key='sb'
        setting={this.searchConf} />,
      <Toolbar
        key='tb'
        onToggleSetting={dispatchHelper} />,
      <Clock key='ck' />,
      <Weather key='wr' />,
      <ThemeProvider key='tp'>
        <SettingDialog
          setting={{
            vision : this.visionConf,
            search : this.searchConf,
            weather: this.weatherConf,
          }}
          settingDialogStatus={settingDialogStatus}
          onToggleSetting={dispatchHelper} />
      </ThemeProvider>
    ]
  }
}

export default Index

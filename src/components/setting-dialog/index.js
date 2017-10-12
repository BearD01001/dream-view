import React from 'react'
import Drawer from 'material-ui/Drawer'
import SwipeableViews from 'react-swipeable-views'
import Tabs, { Tab } from 'material-ui/Tabs'
import IconMovieFilter from 'material-ui-icons/MovieFilter'
import IconWbSunny from 'material-ui-icons/WbSunny'
import IconPublic from 'material-ui-icons/Public'

import Vision from './vision'
import Weather from './weather'
import Search from './search'

class SettingDialog extends React.Component {
  state = {
    active: 0
  }

  changeTab = (event, idx) => {
    this.setState({ active: idx })
  }

  render() {
    const {
      setting,
      settingDialogStatus,
      onToggleSetting,
    } = this.props
    const closeDialog = _ => onToggleSetting(false)

    return (
      <Drawer
        anchor="right"
        open={settingDialogStatus}
        onRequestClose={closeDialog}
      >
        <Tabs
          value={this.state.active}
          onChange={this.changeTab}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab icon={<IconMovieFilter />} label="Vision" />
          <Tab icon={<IconWbSunny />} label="Weather" />
          <Tab icon={<IconPublic />} label="Search Engine" />
        </Tabs>
        <SwipeableViews index={this.state.active}>
          <Vision setting={setting.vision} />
          <Weather setting={setting.weather} />
          <Search setting={setting.search} />
        </SwipeableViews>
      </Drawer>
    )
  }
}

export default SettingDialog

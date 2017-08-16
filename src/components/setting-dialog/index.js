import React from 'react'
import Drawer from 'material-ui/Drawer'
// import styleInjector from 'react-jss'
import SwipeableViews from 'react-swipeable-views'
import Tabs, { Tab } from 'material-ui/Tabs'
import IconMovieFilter from 'material-ui-icons/MovieFilter'
import IconCloud from 'material-ui-icons/Cloud'
import IconPublic from 'material-ui-icons/Public'

import Vision from './vision'
import Weather from './weather'
import Search from './search'

class SettingDialog extends React.Component {
  state = {
    open: true,
    active: 0,
  }

  closeDialog = () => this.setState({ open: false })

  changeTab = (event, idx) => {
    this.setState({ active: idx })
  }

  componentDidMount() {
    console.log(this)
  }

  render() {
    return (
      <Drawer
        anchor='right'
        open={this.state.open}
      >
        <Tabs
          value={this.state.active}
          index={this.state.active}
          onChange={this.changeTab}
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          <Tab icon={<IconMovieFilter />} />
          <Tab icon={<IconCloud />} />
          <Tab icon={<IconPublic />} />
        </Tabs>
        <SwipeableViews index={this.state.active}>
          <Vision />
          <Weather />
          <Search />
        </SwipeableViews>
      </Drawer>
    )
  }
}

export default SettingDialog

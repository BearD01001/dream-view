import React from 'react'
import Drawer from 'material-ui/Drawer'
// import styleInjector from 'react-jss'
import SwipeableViews from 'react-swipeable-views'
import Tabs, { Tab } from 'material-ui/Tabs'
import AppBar from 'material-ui/AppBar'
import MovieFilter from 'material-ui-icons/MovieFilter'
import Cloud from 'material-ui-icons/Cloud'
import Search from 'material-ui-icons/Search'

import Vision from './vision'

// const styles = {
//   label: {
//     color: '#ddd'
//   }
// }

// @styleInjector(styles)
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
        <AppBar color='blueGrey'>
          <Tabs
            index={this.state.active}
            onChange={this.changeTab}
            centered
          >
            <Tab icon={<MovieFilter />} />
            <Tab icon={<Cloud />} />
            <Tab icon={<Search />} />
          </Tabs>
        </AppBar>
        <SwipeableViews style={{paddingTop: 50}} index={this.state.active}>
          <Vision />
          <div>222222222222222222222222222222222222222222222222</div>
          <div>333</div>
        </SwipeableViews>
      </Drawer>
    )
  }
}

export default SettingDialog

import React from 'react'
// import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import SettingsIcon from 'material-ui-icons/Settings'
import HistoryIcon from 'material-ui-icons/History'
import WidgetsIcon from 'material-ui-icons/Widgets'
import StarIcon from 'material-ui-icons/Star'

import SettingDialog from './setting-dialog'

const style = {
  toolbar: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: '#fff',
  }
}

class Toolbar extends React.Component {
  state = {  }
  render() {
    return (
      <div style={ style.toolbar }>
        <IconButton color='contrast'>
          <WidgetsIcon />
        </IconButton>
        <IconButton color='contrast'>
          <StarIcon />
        </IconButton>
        <IconButton color='contrast'>
          <HistoryIcon />
        </IconButton>
        <IconButton color='contrast'>
          <SettingsIcon />
        </IconButton>
        <SettingDialog />
      </div>
    )
  }
}

export default Toolbar

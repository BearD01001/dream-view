import React from 'react'
// import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import SettingsIcon from 'material-ui-icons/Settings'
import HistoryIcon from 'material-ui-icons/History'
import WidgetsIcon from 'material-ui-icons/Widgets'
import StarIcon from 'material-ui-icons/Star'

const style = {
  toolbar: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: '#fff',
  }
}

class Toolbar extends React.Component {
  render() {
    const { onToggleSetting } = this.props

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
        <IconButton
          color='contrast'
          onClick={_ => onToggleSetting(true)} >
          <SettingsIcon />
        </IconButton>
      </div>
    )
  }
}

export default Toolbar

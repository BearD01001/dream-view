import React from 'react'
import IconButton from 'material-ui/IconButton'
import {
  Settings as SettingsIcon,
  History as HistoryIcon,
  Widgets as WidgetsIcon,
  Star as StarIcon,
} from '@material-ui/icons'

const style = {
  toolbar: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: '#fff',
  },
}

class Toolbar extends React.Component {
  render() {
    const { onToggleSetting } = this.props

    return (
      <div style={style.toolbar}>
        <IconButton color="contrast">
          <WidgetsIcon />
        </IconButton>
        <IconButton color="contrast">
          <StarIcon />
        </IconButton>
        <IconButton color="contrast">
          <HistoryIcon />
        </IconButton>
        <IconButton color="contrast" onClick={_ => onToggleSetting(true)}>
          <SettingsIcon />
        </IconButton>
      </div>
    )
  }
}

export default Toolbar

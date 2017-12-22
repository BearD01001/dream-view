import React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import orange from 'material-ui/colors/orange'
import green from 'material-ui/colors/green'
import red from 'material-ui/colors/red'

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: {
      ...green,
      A400: '#00e677'
    },
    error: red
  }
})

function themeProvider({children}) {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}

export default themeProvider

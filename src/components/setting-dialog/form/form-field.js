import React from 'react'
import Grid from 'material-ui/Grid'
import styleInjector from 'react-jss'
import styles from './styles'

const FormField = ({ label, desc, classes, children }) => {
  return (
    <div className={classes.formField}>
      <Grid className={classes.formLabel} item={true} md={4}>
        {label}
        <span>
          {desc}
        </span>
      </Grid>
      <Grid item={true} md={8}>
        {children}
      </Grid>
    </div>
  )
}

export default styleInjector(styles)(FormField)

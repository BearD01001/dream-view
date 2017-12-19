import React from 'react'
import PropTypes from 'prop-types'
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

FormField.propTypes = {
  label: PropTypes.string.isRequired
}

export default styleInjector(styles)(FormField)

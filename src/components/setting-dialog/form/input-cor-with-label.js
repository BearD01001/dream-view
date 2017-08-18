import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'material-ui/Checkbox'
import Radio from 'material-ui/Radio'
import { InputLabel } from 'material-ui/Input'
import styleInjector from 'react-jss'
import styles from './styles'

const InputCorWithLabel = ({ label, type, classes, sheet, ...attrs }) => {
  return (
    <InputLabel style={{ display: 'block' }}>
      {type === 'checkbox' ? <Checkbox {...attrs} /> : <Radio {...attrs} />}
      <span className={classes.inputLabel}>
        {label}
      </span>
    </InputLabel>
  )
}

InputCorWithLabel.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'radio'])
}

export default styleInjector(styles)(InputCorWithLabel)

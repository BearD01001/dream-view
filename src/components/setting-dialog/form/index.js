import React from 'react'
import FormField from './form-field'
import RadioWithLabel from './radio-with-label'
import CheckboxWithLabel from './checkbox-with-label'
import styleInjector from 'react-jss'
import styles from './styles'

const Form = styleInjector(styles)(arg => {
  return (
    <div className={arg.classes.form}>
      {arg.children}
    </div>
  )
})

export default Form
export { FormField, RadioWithLabel, CheckboxWithLabel }

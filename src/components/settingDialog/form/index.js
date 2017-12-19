import React from 'react'
import FormField from './formField'
import RadioWithLabel from './radioWithLabel'
import CheckboxWithLabel from './checkboxWithLabel'
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
export { default as Slider } from './slider'

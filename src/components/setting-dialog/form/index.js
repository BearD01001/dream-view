import FormField from './form-field'
import RadioWithLabel from './radio-with-label'
import CheckboxWithLabel from './checkbox-with-label'
import styleInjector from 'react-jss'
import styles from './styles'

const Form = styleInjector(styles)(arg => {
  return (
    <div className={styles.form}>
      {arg.children}
    </div>
  )
})

export default Form
export { FormField, RadioWithLabel, CheckboxWithLabel }

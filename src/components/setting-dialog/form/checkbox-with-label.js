import Checkbox from 'material-ui/Checkbox'
import styleInjector from 'react-jss'
import styles from './styles'

const CheckboxWithLabel = arg => {
  const { label, ...cbAttrs } = arg

  return (
    <InputLabel style={{ display: 'block' }}>
      <Checkbox {...cbAttrs} />
      <span className={styles.checkboxLabel}>
        {label}
      </span>
    </InputLabel>
  )
}

export default styleInjector(styles)(CheckboxWithLabel)

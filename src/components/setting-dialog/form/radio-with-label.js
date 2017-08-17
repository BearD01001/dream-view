import Radio from 'material-ui/Radio'
import styleInjector from 'react-jss'
import styles from './styles'

const RadioWithLabel = arg => {
  const { label, ...rAttrs } = arg

  return (
    <InputLabel style={{ display: 'block' }}>
      <Radio {...rAttrs} />
      <span className={styles.checkboxLabel}>
        {label}
      </span>
    </InputLabel>
  )
}

export default styleInjector(styles)(RadioWithLabel)

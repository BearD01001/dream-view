import styleInjector from 'react-jss'
import styles from './styles'

const FormField = arg => {
  return (
    <div className={styles.formField}>
      <Grid className={styles.formLabel} item={true} md={4}>
        {arg.label}
        <span>
          {arg.desc}
        </span>
      </Grid>
      <Grid item={true} md={8}>
        {arg.children}
      </Grid>
    </div>
  )
}

export default styleInjector(styles)(FormField)

import React from 'react'
import styleInjector from 'react-jss'
import Grid from 'material-ui/Grid'
import Checkbox from 'material-ui/Checkbox'
import { InputLabel } from 'material-ui/Input'
import styles from './styles'

@styleInjector(styles)
class Vision extends React.Component {
  checkboxClick = () => {
    console.log(111)
  }

  render() {
    const { classes: styles } = this.props
    const Form = arg => {
      return (
        <div className={styles.form}>
          {arg.children}
        </div>
      )
    }
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
    return (
      <Form>
        <FormField label="图片源" desc="11111111111">
          <CheckboxWithLabel label="111" onClick={this.checkboxClick} />
          <CheckboxWithLabel label="111" onClick={this.checkboxClick} />
        </FormField>
      </Form>
    )
  }
}

export default Vision

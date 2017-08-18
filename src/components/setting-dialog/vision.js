import React from 'react'
import styleInjector from 'react-jss'
import Grid from 'material-ui/Grid'
import Checkbox from 'material-ui/Checkbox'
import Radio, { RadioGroup } from 'material-ui/Radio'
import { InputLabel } from 'material-ui/Input'
import Divider from 'material-ui/Divider'
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
    return (
      <Form>
        <FormField label="图片源">
          <CheckboxWithLabel label="500px" onClick={this.checkboxClick} />
          <CheckboxWithLabel label="Bing" onClick={this.checkboxClick} />
          <CheckboxWithLabel label="Filckr" onClick={this.checkboxClick} />
          <CheckboxWithLabel label="Google Art" onClick={this.checkboxClick} />
        </FormField>
        <Divider />
        <FormField label="缓存数量">
          <RadioGroup name="chche-num">
            <RadioWithLabel label="3" value="3" />
            <RadioWithLabel label="5" value="5" />
            <RadioWithLabel label="10" value="10" />
          </RadioGroup>
        </FormField>
        <Divider />
        <FormField label="更新间隔">
          <RadioGroup name="update-interval">
            <RadioWithLabel label="智能" value="0" />
            <RadioWithLabel label="每分钟" value="1" />
            <RadioWithLabel label="每小时" value="2" />
            <RadioWithLabel label="每天" value="3" />
          </RadioGroup>
        </FormField>
      </Form>
    )
  }
}

export default Vision

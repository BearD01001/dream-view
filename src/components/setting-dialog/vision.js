import React from 'react'
import { RadioGroup } from 'material-ui/Radio'
import Divider from 'material-ui/Divider'
import Form, { FormField, CheckboxWithLabel, RadioWithLabel } from './form'

class Vision extends React.Component {
  checkboxClick = () => {
    console.log(111)
  }

  render() {
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

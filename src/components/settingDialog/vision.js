import React from 'react'
import { RadioGroup } from 'material-ui/Radio'
import Divider from 'material-ui/Divider'
import Form, {
  FormField,
  CheckboxWithLabel,
  RadioWithLabel,
} from './form'
import {
  initSetting,
  saveSetting,
} from '../../model'

@initSetting
class Vision extends React.Component {
  constructor(props) {
    super(props)
    this.updateIntervalChange = this.updateIntervalChange.bind(this)
    this.imageOriginChange    = this.imageOriginChange.bind(this)
    this.cacheNumChange       = this.cacheNumChange.bind(this)
  }

  @saveSetting
  imageOriginChange ({ target }) {
    if (target.checked) {
      this.setState(preState => ({
        imageOrigin: [...preState.imageOrigin, target.value]
      }))
    } else {
      this.setState(preState => ({
        imageOrigin: preState.imageOrigin.filter(v => v !== target.value)
      }))
    }
  }

  @saveSetting
  cacheNumChange (event, value) {
    this.setState({
      cacheNum: value
    })
  }

  @saveSetting
  updateIntervalChange (event, value) {
    this.setState({
      updateInterval: value
    })
  }

  render() {
    return (
      <Form>
        <FormField label="图片源">
          <CheckboxWithLabel
            label="500px"
            value="500px"
            checked={this.state.imageOrigin.includes('500px')}
            onClick={this.imageOriginChange}
          />
          <CheckboxWithLabel
            label="Bing"
            value="bing"
            checked={this.state.imageOrigin.includes('bing')}
            onClick={this.imageOriginChange}
          />
          <CheckboxWithLabel
            label="Filckr"
            value="filckr"
            checked={this.state.imageOrigin.includes('filckr')}
            onClick={this.imageOriginChange}
          />
          <CheckboxWithLabel
            label="Google Art"
            value="google"
            checked={this.state.imageOrigin.includes('google')}
            onClick={this.imageOriginChange}
          />
        </FormField>
        <Divider />
        <FormField label="缓存数量">
          <RadioGroup
            name="cache-num"
            value={this.state.cacheNum}
            onChange={this.cacheNumChange}
          >
            <RadioWithLabel label="3" value="3" />
            <RadioWithLabel label="5" value="5" />
            <RadioWithLabel label="10" value="10" />
          </RadioGroup>
        </FormField>
        <Divider />
        <FormField label="更新间隔">
          <RadioGroup
            name="update-interval"
            value={this.state.updateInterval}
            onChange={this.updateIntervalChange}
          >
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

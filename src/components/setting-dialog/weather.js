import React from 'react'
import { RadioGroup } from 'material-ui/Radio'
import Switch from 'material-ui/Switch'
import Divider from 'material-ui/Divider'
import Form, {
  FormField,
  RadioWithLabel,
  Slider,
} from './form'
import {
  initSetting,
  saveSetting,
} from '../../model'

@initSetting
class Weather extends React.Component {
  state = {
    weatherWidgetStatus: true,
    tUnit: '0',
    weatherWidgetTransparent: 1
  }

  constructor (props) {
    super(props)
    this.weatherWidgetTransparentChange = this.weatherWidgetTransparentChange.bind(this)
    this.weatherWidgetStatusChange = this.weatherWidgetStatusChange.bind(this)
    this.tUnitChange = this.tUnitChange.bind(this)
  }

  @saveSetting
  weatherWidgetStatusChange({ target }) {
    this.setState({
      weatherWidgetStatus: target.checked
    })
  }

  @saveSetting
  tUnitChange ({ target }) {
    this.setState({
      tUnit: target.value
    })
  }

  @saveSetting
  weatherWidgetTransparentChange (value) {
    this.setState({
      weatherWidgetTransparent: value
    })
  }

  render() {
    return (
      <Form>
        <FormField label="启用">
          <Switch
            checked={this.state.weatherWidgetStatus}
            onChange={this.weatherWidgetStatusChange}
          />
        </FormField>
        <div>
          <Divider />
          <FormField label="温度单位">
            <RadioGroup
              name="tUnit"
              value={this.state.tUnit}
              onChange={this.tUnitChange}
            >
              <RadioWithLabel label="℃" value="0" />
              <RadioWithLabel label="℉" value="1" />
            </RadioGroup>
          </FormField>
          <Divider />
          <FormField label="挂件透明度">
            <Slider
              value={this.state.weatherWidgetTransparent}
              onChange={this.weatherWidgetTransparentChange}
            />
          </FormField>
        </div>
      </Form>
    )
  }
}

export default Weather

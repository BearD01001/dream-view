import React from 'react'
import { RadioGroup } from 'material-ui/Radio'
import Input from 'material-ui/Input'
import Switch from 'material-ui/Switch'
import Divider from 'material-ui/Divider'
import Form, {
  FormField,
  CheckboxWithLabel,
  RadioWithLabel,
} from './form'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
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
  // saveSetting = saveSetting(this)

  constructor (props) {
    super(props)
    this.weatherWidgetTransparentChange = this.weatherWidgetStatusChange.bind(this)
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
              selectedValue={this.state.tUnit}
              onChange={this.tUnitChange}
            >
              <RadioWithLabel label="℃" value="0" />
              <RadioWithLabel label="℉" value="1" />
            </RadioGroup>
          </FormField>
          <Divider />
          <FormField label="挂件透明度">
            {/* <Slider
              style={{
                marginTop: '20px'
              }}
              max="1"
              step="0.01"
              trackStyle={{ backgroundColor: '#3f51be' }}
              handleStyle={{
                backgroundColor: '#3f51be',
                color: '#3f51be',
                border: 'none',
                boxShadow:
                  '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
              }}
              value={this.state.weatherWidgetTransparent}
              onChange={this.weatherWidgetTransparentChange}
            /> */}
          </FormField>
        </div>
      </Form>
    )
  }
}

export default Weather

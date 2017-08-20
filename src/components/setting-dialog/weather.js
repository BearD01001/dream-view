import React from 'react'
import { RadioGroup } from 'material-ui/Radio'
import Input from 'material-ui/Input'
import Switch from 'material-ui/Switch'
import Divider from 'material-ui/Divider'
import Form, { FormField, CheckboxWithLabel, RadioWithLabel } from './form'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

class Weather extends React.Component {
  state = {
    weatherWidgetStatus: true,
    tUnit: '0',
    weatherWidgetTransparent: 1
  }

  weatherWidgetStatusChange = ({ target }) => {
    console.log(target.checked)
    this.setState({
      weatherWidgetStatus: target.checked
    })
  }

  tUnitChange = ({ target }) => {
    this.setState({
      tUnit: target.value
    })
  }

  weatherWidgetTransparentChange = ({ target }) => {
    this.setState({
      weatherWidgetTransparent: target.value
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
            <Slider
              max="1"
              step="0.01"
              trackStyle={{ backgroundColor: '#0f9d58' }}
              railStyle={{ backgroundColor: '#939393' }}
              dotStyle={{ backgroundColor: '#0f9d58', color: '#0f9d58' }}
            />
            <input
              type="range"
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

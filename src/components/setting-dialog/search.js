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
class Search extends React.Component {
  state = {
    searchWidgetTransparent: 1,
    searchWidgetStatus     : true,
    searchEngine           : 'google',
  }

  constructor (props) {
    super(props)
    this.searchWidgetTransparentChange = this.searchWidgetTransparentChange.bind(this)
    this.searchWidgetStatusChange = this.searchWidgetStatusChange.bind(this)
    this.searchEngine = this.searchEngine.bind(this)
  }

  @saveSetting
  searchWidgetStatusChange({ target }) {
    this.setState({
      searchWidgetStatus: target.checked
    })
  }

  @saveSetting
  searchEngine ({ target }) {
    this.setState({
      tUnit: target.value
    })
  }

  @saveSetting
  searchWidgetTransparentChange (value) {
    this.setState({
      searchWidgetTransparent: value
    })
  }

  render() {
    return (
      <Form>
        <FormField label="启用">
          <Switch
            checked={this.state.searchWidgetStatus}
            onChange={this.searchWidgetStatusChange}
          />
        </FormField>
        <div>
          <Divider />
          <FormField label="搜索引擎">
            <RadioGroup
              name="tUnit"
              value={this.state.tUnit}
              onChange={this.searchEngine}
            >
              <RadioWithLabel label="谷歌" value="google" />
              <RadioWithLabel label="必应" value="bing" />
              <RadioWithLabel label="百度" value="baidu" />
            </RadioGroup>
          </FormField>
          <Divider />
          <FormField label="挂件透明度">
            <Slider
              value={this.state.searchWidgetTransparent}
              onChange={this.searchWidgetTransparentChange}
            />
          </FormField>
        </div>
      </Form>
    )
  }
}

export default Search

import React from 'react'
import RcSlider from 'rc-slider'
import 'rc-slider/assets/index.css'

const Slider = ({ value, onChange }) => {
  return (
    <RcSlider
      style={{
        marginTop: '20px'
      }}
      max={1}
      step={0.01}
      trackStyle={{ backgroundColor: '#ff9800' }}
      handleStyle={{
        backgroundColor: '#ff9800',
        color: '#ff9800',
        border: 'none',
        boxShadow:
          '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
      }}
      value={value}
      onChange={onChange}
    />
  )
}

export default Slider

import React, { Component } from 'react'
import ImgUtil from '../model/imgUtil'

class Landscape extends Component {
  state = {
    imgLoaded: false,
    imgData: void(0)
  }

  async componentWillMount () {
    let imgData = await ImgUtil.getUrl()

    this.refs.img.src = imgData
    this.setState({ imgData })
  }

  imgLoaded () {
    this.setState({ imgLoaded: true })
  }

  render() {
    let style = {
      backgroundImage: this.state.imgData ? `url(${ this.state.imgData })` : 'none',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity: this.state.imgLoaded ? 1 : 0,
      zIndex: -1,
      transition: 'opacity .5s'
    }
    let hidden = {
      display: 'none'
    }
    
    return (
      <div style={ style }>
        <img
          ref='img'
          onLoad={ this.imgLoaded.bind(this) }
          style={ hidden }
          alt='Dream view'
        />
      </div>
    )
  }
}

export default Landscape

import React, { Component } from 'react';
import imgUtil from '../module/img-util.jsx';

class Img extends Component {
    imgLoaded() {
        DV.setState({
            imgLoaded: true
        })
    }

    componentDidMount() {
        DV.img.DOM = this.refs.img;
    }

    render() {
        let img = imgUtil.get();
        let style = {
            backgroundImage: `url(${ img })`,
        }

        return  <div id='img' className={ DV.state.imgLoaded ? 'show' : '' } style={ style } ref='img'>
                    <img src={ img } onLoad={ this.imgLoaded } />
                </div>;
    }
}

export default Img;
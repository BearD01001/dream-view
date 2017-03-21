import React, { Component } from 'react';
import imgUtil from '../module/img-util.jsx';

class Img extends Component {
    constructor(props) {
        super(props);
        
        this.img = imgUtil.get();
    }

    imgLoaded() {
        DV.setState({
            imgLoaded: true
        })
    }

    componentDidMount() {
        DV.img.DOM = this.refs.img;
    }

    render() {
        let style = {
            backgroundImage: `url(${ this.img })`,
        }

        return  <div id='img' className={ DV.state.imgLoaded ? 'show' : '' } style={ style } ref='img'>
                    <img src={ this.img } onLoad={ this.imgLoaded } />
                </div>;
    }
}

export default Img;
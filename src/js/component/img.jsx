import React, { Component } from 'react';
import imgUtil from '../module/img-util.jsx';

class Img extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            img: ''
        }
    }

    imgLoaded() {
        setTimeout(function() {
            DV.setState({
                imgLoaded: true
            });
        }, 500);
    }

    componentDidMount() {
        DV.img.DOM = this.refs.img;
        imgUtil.get().then(img => {
            this.setState({
                img: img
            });
        });
    }

    render() {
        let style = {
            backgroundImage: `url(${ this.state.img })`,
        }

        return  <div id='img' className={ DV.state.imgLoaded ? 'show' : '' } style={ style } ref='img'>
                    <img src={ this.state.img } onLoad={ this.imgLoaded } />
                </div>;
    }
}

export default Img;
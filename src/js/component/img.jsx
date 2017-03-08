import React, { Component } from 'react';
import imgUtil from '../module/img-util.jsx';

class Img extends Component {
    render() {
        let style = {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: `url(${ imgUtil.get() })`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }

        return <div style={ style }></div>;
    }
}

export default Img;
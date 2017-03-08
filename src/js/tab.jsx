import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Img from './component/Img.jsx';

class Tab extends Component {
    constructor(args) {
        super(args);

        top.TAB = this;
    }

    render() {
        return  (<div></div>
                    <Img />);
    }
}

ReactDOM.render(<Tab />, document.getElementById('tab'));
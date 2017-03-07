import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Img from './component/Img.jsx';

class Tab extends Component {
    constructor(args) {
        super(args)
    }

    render() {
        return 
            <div>
                <Img />
            </div>
    }
}

ReactDOM.render(<Tab />, document.getElementById('tab'));
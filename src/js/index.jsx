import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Img from './component/img.jsx';
import Widget from './component/widget.jsx';

class Index extends Component {
    constructor(args) {
        super(args);

        this.img = {};
        this.state = {
            imgLoaded: false,
            searchAction: 'http://www.bing.com/search',
            searchName: 'q',
            searchPlaceholder: 'Search Bing'
        }
        top.DV = this;
    }

    render() {
        return  <div>
                    <Img />
                    <Widget />
                </div>;
    }
}

ReactDOM.render(<Index />, document.getElementById('index'));
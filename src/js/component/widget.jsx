import React, { Component } from 'react';
import Search from './search.jsx';
import Clock from './clock.jsx';

class Widget extends Component {
    render() {
        return  <div id="widget">
                    <Search />
                    <Clock />
                </div>;
    }
}

export default Widget;
import React, { Component } from 'react';
import Search from './search.jsx';

class Widget extends Component {
    render() {
        return  <div id="widget">
                    <Search />
                </div>;
    }
}

export default Widget;
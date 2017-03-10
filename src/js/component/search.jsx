import React, { Component } from 'react';
import Chrome from '../module/chrome.jsx';

class Search extends Component {
    gotoSearch() {
        this.refs.searchBtn.click();
    }

    render() {
        return  <form id="search" action={ DV.state.searchAction }>
                    <input
                        type="text"
                        name={ DV.state.searchName }
                        spellCheck="false"
                        autoComplete="off"
                        placeholder={ DV.state.searchPlaceholder }/>
                    <span
                        onClick={ this.gotoSearch.bind(this) }
                        title={ Chrome.i18n('searchBtn') }
                        className='button fa fa-search'>
                    </span>
                    <button type="submit" ref='searchBtn'>{ Chrome.i18n('searchBtn') }</button>
                </form>
    }
}

export default Search;
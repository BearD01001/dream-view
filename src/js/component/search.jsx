import React, { Component } from 'react';
import Chrome from '../module/chrome.jsx';

class Search extends Component {
    render() {
        console.log(Chrome.i18n('@@ui_locale'))
        console.log(Chrome.i18n('searchBtn'))
        return  <form id="search" action="#">
                    <input
                        type="text"
                        spellCheck="false"
                        autoComplete="off"
                        placeholder={ Chrome.i18n('searchBingPlaceholder') }/>
                    <span title={ Chrome.i18n('searchBtn') } className='button fa fa-search'></span>
                    <button type="submit">{ Chrome.i18n('searchBtn') }</button>
                </form>
    }
}

export default Search;
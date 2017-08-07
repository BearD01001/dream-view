import React, { Component } from 'react'
import '../assets/search.css'

class SearchBar extends Component {
  gotoSearch () {
    this.refs.searchBtn.click()
  }
  render() {
    return (
      <form id='search' action='http://www.bing.com/search'>
        <input
          type='text'
          name='q'
          spellCheck='false'
          autoComplete='off'
          placeholder='Search Bing'
        />
        <span
          className='button fa fa-search'
          onClick={ this.gotoSearch.bind(this) }
          title='搜索'
        >
        </span>
        <button
          type='submit'
          ref='searchBtn'
        >
          搜索
        </button>
      </form>
    )
  }
}

export default SearchBar

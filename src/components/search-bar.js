import React, { Component } from 'react'
import '../assets/search.css'

import { searchEngine } from '../config'

class SearchBar extends Component {
  componentWillMount () {
    const { setting } = this.props
    this.se = searchEngine.filter(i => i.nameEn === setting.searchEngine)[0]
  }

  gotoSearch () {
    this.refs.searchBtn.click()
  }
  render() {
    return (
      <form id='search' action={this.se.action}>
        <input
          type='text'
          name={this.se.parameter}
          spellCheck='false'
          autoComplete='off'
          placeholder={this.se.placeholder}
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

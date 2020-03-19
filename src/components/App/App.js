import React, { Component } from 'react';

import local from '../../data/local';
import health from '../../data/health';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import technology from '../../data/technology';

import './App.css';

import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedArticles: local,
      local: local,
      health: health,
      entertainment: entertainment,
      technology: technology,
      science: science
    }
  }

  displayArticles = (category) => {
    this.setState({
      selectedArticles: this.state[category]
    })
  }

  searchArticles = (query) => {
    const queryRegEx = new RegExp(query.toLowerCase());
    const matchingArticles = this.state.selectedArticles.filter(article => {
      return queryRegEx.test(article.headline.toLowerCase());
    })
    this.setState({
      selectedArticles: matchingArticles
    })
  }

  render () {
    return (
      <div className="app">
        <header>
          <h1 className="page-title">What's New?</h1>
          <SearchForm searchArticles={this.searchArticles} />
        </header>
        <main>
          <Menu displayArticles={this.displayArticles}/>
          <NewsContainer articles={this.state.selectedArticles} />
        </main>
      </div>
    );
  }
}

export default App;

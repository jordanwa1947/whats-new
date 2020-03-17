import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';

import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      localArticles: local
    }
  }

  render () {
    return (
      <div className="app">
        <Menu />
        <NewsContainer localArticles={this.state.localArticles} />
      </div>
    );
  }
}

export default App;

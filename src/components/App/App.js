import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';

import NewsContainer from '../NewsContainer/NewsContainer';

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
        <NewsContainer localArticles={this.state.localArticles} />
      </div>
    );
  }
}

export default App;

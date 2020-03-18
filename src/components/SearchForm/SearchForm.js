import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      query: '',
      searchArticles: props.searchArticles
    }
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleSearch = () => {
    this.state.searchArticles(this.state.query)
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.query} onChange={this.handleChange} />
        <button type="button" onClick={this.handleSearch}>Search</button>
      </form>
    )
  }
}

export default SearchForm;

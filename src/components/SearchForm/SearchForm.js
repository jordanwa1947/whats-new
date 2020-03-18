import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      query: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.query} onChange={this.handleChange} />
        <button>Search</button>
      </form>
    )
  }
}

export default SearchForm;

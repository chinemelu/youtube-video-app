import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchText: 'Buildings'
  }

  handleInput =  e => {
    this.setState({ searchText: e.target.value })
  };

  handleSubmit = e => {
    e.preventDefault();
    // TODO : Make sure we call 
    // callback from parent component
    this.props.onSearchTextSubmit(this.state.searchText)
  }
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="">
              Video Search
            </label>
            <input type="text" onChange={this.handleInput} />
          </div>
        </form>
      </div>
    );
  }
 
}

export default SearchBar;

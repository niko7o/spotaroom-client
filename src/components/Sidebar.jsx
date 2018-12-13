import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'all',
      sort: 'ascending',
    };
  }

  render() {
    const {
      type,
      sort 
    } = this.state;

    return (
      <div className="Sidebar">
        <h2>sidebar</h2>
        <h4>Filters</h4>

        <p>Property type:</p>
        <select name="type">
          <option selected>All</option>
          <option>Apartment</option>
          <option>House</option>
        </select>
     
        <p>Sort by price:</p>
        <select name="type">
          <option selected>Ascending</option>
          <option>Descending</option>
        </select>
      </div>
    );
  }
}

export default Sidebar;

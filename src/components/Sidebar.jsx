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
        <h4>Filters</h4>

        <p>Property type:</p>
        <select defaultValue="All" name="type">
          <option value="All">All</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
        </select>
     
        <p>Sort by price:</p>
        <select defaultValue="Ascending" name="type">
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
      </div>
    );
  }
}

export default Sidebar;

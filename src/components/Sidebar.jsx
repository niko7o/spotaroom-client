import React, { Component } from 'react';
// import react-select

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'all',
      sort: 'ascending',
    };
  }

  togglePrices = (direction) => {
    this.setState({ sort: direction })
    this.props.togglePrices(direction);
  }

  render() {
    const {
      type,
      sort 
    } = this.state;

    return (
      <div className="Sidebar">
        <p>Type:</p>
        <select defaultValue="All" name="type">
          <option value="All">All</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
        </select>
     
        <p>Sort by price:</p>
        <select defaultValue="Ascending" name="price">
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>

        <button type="button">Download JSON</button>
      </div>
    );
  }
}

export default Sidebar;

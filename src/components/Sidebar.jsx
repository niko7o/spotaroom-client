import React, { Component } from 'react';
import Select from 'react-select';

const PriceSelectOptions = [
  { value: 'asc', label: 'Ascending' },
  { value: 'desc', label: 'Descending' },
]

const TypeSelectOptions = [
  { value: 'apartments', label: 'Apartment' },
  { value: 'rooms', label: 'Room' },
  { value: 'studios', label: 'Studio' },
  { value: 'residences', label: 'Residence' },
]

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPrice: 'asc',
      selectedType: 'all'
    }
  }

  changeTypeOnSelect = (selected) => {
    this.setState({ selectedType: selected })
    this.props.getSpecificTypeHomes(selected.value)
  }

  changePriceOnSelect = (selected) => {
    this.setState({ selectedPrice: selected })
    this.props.togglePrices(selected.value)
  }

  render() {
    return (
      <div className="Sidebar">
        <p>Property type:</p>
        <Select
          className="Sidebar__selector"
          value={this.state.selectedType}
          onChange={this.changeTypeOnSelect}
          options={TypeSelectOptions} 
        />

        <p>Sort by price:</p>
        <Select
          className="Sidebar__selector"
          value={this.state.selectedPrice}
          onChange={this.changePriceOnSelect}
          options={PriceSelectOptions} 
        />

        <p>Save your search:</p>
        <button className="Sidebar__downloader" type="button">Download JSON</button>
      </div>
    );
  }
}

export default Sidebar;

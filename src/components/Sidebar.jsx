import React, { Component } from 'react';
import Select from 'react-select';

const PriceSelectOptions = [
  { value: 'asc', label: 'Ascending' },
  { value: 'desc', label: 'Descending' },
]

const TypeSelectOptions = [
  { value: 'apartment', label: 'Apartment' },
  { value: 'room', label: 'Room' },
  { value: 'studio', label: 'Studio' },
  { value: 'residence', label: 'Residence' },
]

class Sidebar extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selectedPrice: 'asc'
    }
  }

  changePriceOnSelect = (selected) => {
    this.props.togglePrices(selected.value)
  }

  render() {
    return (
      <div className="Sidebar">
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

import React, { Component } from 'react';
import axios from 'axios';
import * as api from './constants/api.constants';
import './sass/main.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Homelist from './components/Homelist';
import Loader from './components/Loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: [],
      city: 'madrid',
      sort: 'asc',
      type: 'all',
      loading: true,
    };
  }

  componentDidMount() {
    this.getHomesFromApi();
  }

  getHomesFromApi = () => {
    axios.get(api.GET_HOMES_DEFAULT)
    .then(homesArray => {
      const initialHomes = this.orderHomesBy('asc', homesArray.data.data)
      this.setState({
        homes: initialHomes,
        loading: false
      })
    })
    .catch(err => {
      this.setState({
        loading: false,
      })
    })
  }

  getSpecificTypeHomes = (selectedType) => {
    this.setState({ 
      loading: true 
    })
    axios.get(`http://localhost:8000/api/homes/${this.state.city}/${selectedType}`)
    .then(typedHomes => {
      this.setState({
        homes: typedHomes.data.data,
        type: selectedType,
        loading: false
      })
    })
    .catch(err => {
      this.setState({
        loading: false,
      })
    })
  }

  orderHomesBy = (order, homes) => {
    switch(order) {
      case 'asc': return homes.sort((home1, home2) => home1.pricePerMonth - home2.pricePerMonth);

      case 'desc': return homes.sort((home1, home2) => home2.pricePerMonth - home1.pricePerMonth);

      default: return homes.sort((home1, home2) => home1.pricePerMonth - home2.pricePerMonth);
    }
  }

  togglePrices = (order) => {
    const newHomesByOrder = this.orderHomesBy(order, this.state.homes);
    this.setState({
      sort: order,
      homes: newHomesByOrder
    })
  }

  render() {
    const {
      homes,
      type,
      sort,
      loading,
    } = this.state;


    return (
      <React.Fragment>
        <Navbar />
        <div className="Search">
          <Sidebar 
            getSpecificTypeHomes={this.getSpecificTypeHomes}
            togglePrices={this.togglePrices}
            sort={sort}
          />
          
          { loading 
            ? <Loader/> 
            : <Homelist
                togglePrices={this.togglePrices}
                homes={homes}
                type={type}
                sort={sort}
            />
          }
        </div>
      </React.Fragment>
    );
  }
}

export default App;

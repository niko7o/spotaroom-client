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

  getHomesFromApi = (type) => {
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

  getHomesFromCity = (city) => {
    // do another axios get here for different home citys based on parameters
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

    if(loading) return (<Loader />);

    return (
      <React.Fragment>
        <Navbar />
        <div className="Search">
          <Sidebar 
            togglePrices={this.togglePrices}
            sort={sort}
          />
          { loading 
            ? <Loader /> 
            : <Homelist
                togglePrices={this.togglePrices}
                homes={homes}
                sort={sort}
              /> 
          }
        </div>
      </React.Fragment>
    );
  }
}

export default App;

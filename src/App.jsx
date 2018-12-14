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
      city: 'madrid',
      sort: 'asc',
      type: 'all',
      loading: true,
      errors: null,
      homes: [],
    };
  }

  componentDidMount() {
    this.getHomesFromCity(this.state.city);
  }

  componentDidCatch(err) {
    this.setState({
      errors: err,
    });
  }

  getHomesFromCity = (city) => {
    axios.get(api.GET_HOMES_DEFAULT)
    .then(homesArray => {
      console.log(homesArray.data.data)
      this.setState({
        city: city,
        homes: homesArray.data.data,
        loading: false
      })
    })
    .catch(err => {
      this.setState({
        errors: err,
        loading: false
      })
    })
  }

  togglePrices = (direction) => {
    let sortedHomes = [];
    direction === 'asc' 
    ? sortedHomes = this.state.homes.sort((a, b) => a.pricePerMonth - b.pricePerMonth)
    : sortedHomes = this.state.homes.sort((a, b) => b.pricePerMonth - a.pricePerMonth)
    
    this.setState({
      sort: direction,
      homes: sortedHomes
    })
  }

  render() {
    const {
      city,
      loading,
      homes
    } = this.state;

    if(loading) return (<Loader />);

    return (
      <React.Fragment>
        <Navbar />
        <div className="Search">
          <Sidebar togglePrices={this.togglePrices}/>
          { loading 
            ? <Loader /> 
            : <Homelist homes={homes}/> 
          }
        </div>
      </React.Fragment>
    );
  }
}

export default App;

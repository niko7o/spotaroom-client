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
      loading: true,
    };
  }

  componentDidMount() {
    this.getHomesFromCity(this.state.city);
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
        loading: false
      })
    })
  }

  togglePrices = (order) => {
    this.setState({ 
      sort: order
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

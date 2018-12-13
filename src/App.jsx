import React, { Component } from 'react';
import axios from 'axios';
import * as api from './constants/api.constants';
import './sass/main.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomeList from './components/HomeList';
import Loader from './components/Loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'madrid',
      loading: true,
      errors: null,
      homes: [],
      cityIds: []
    };
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

  componentDidMount() {
    this.getHomesFromCity(this.state.city);
  }

  componentDidCatch(err) {
    this.setState({
      errors: err,
    });
  }

  render() {
    const {
      city,
      loading,
      errors,
      homes
    } = this.state;

    if(loading) return (<Loader />);

    return (
      <React.Fragment>
        <Navbar />
        <div className="Search">
          <Sidebar />
          { loading ? <Loader /> : <HomeList homes={homes}/> }
        </div>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component, Suspense } from 'react';
import axios from 'axios';
import * as api from './constants/api.constants';
import './sass/main.css';

import Navbar from './components/Navbar';
import Frame from './components/Frame';
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
    };
  }

  getHomesFromCity = (city) => {
    axios.get(api.GET_HOMES_DEFAULT)
    .then(homesArray => {
      console.log(homesArray) //@TO-DO: delete in prod
      this.setState({
        city: city,
        homes: homesArray,
        loading: false
      })
    })
    .catch(err => {
      console.log(err) //@TO-DO: delete in prod
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
        <Frame>
          <Sidebar />
          <HomeList homes={homes}/>
        </Frame>
      </React.Fragment>
    );
  }
}

export default App;

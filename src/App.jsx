import React, { Component } from 'react';
import axios from 'axios';
import * as api from './constants/api.constants';
import './App.css';

import Navbar from './components/Navbar';
import Frame from './components/Frame';
import Sidebar from './components/Sidebar';
import HomeList from './components/HomeList';

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
    axios.get('http://localhost:8000/api/homes')
    .then(homesArray => {
      this.setState({
        homes: homesArray
      })
    })
    .catch(err => {
      console.log(err) //@TO-DO: delete in prod
      this.setState({
        errors: err
      })
    })
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
    this.getHomesFromCity(this.state.city);
  }

  componentDidCatch(err) {
    this.setState({
      errors: err,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Frame>
          <Sidebar />
          <HomeList />
        </Frame>
      </React.Fragment>
    );
  }
}

export default App;

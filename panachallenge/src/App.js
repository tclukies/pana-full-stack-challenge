import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
      flights: []
    }

    componentDidMount() {
      this.getFlightData()
    }

    getFlightData = () => {
      fetch('../../server/results/DEN_CHI.json')
      // .then(res => res.json())
      .then(flightData => {
        this.setState({ flights: flightData.results })
      })
    }
  render() {
    return (
      <Header /> 
    );
  }
}

export default App;

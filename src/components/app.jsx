import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/weatherList';

export default class App extends Component {
  render() {
    return (
      <div>
        < SearchBar />
        < WeatherList />
      </div>
    );
  }
}

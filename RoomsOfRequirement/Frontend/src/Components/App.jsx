import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import Classrooms from './layout/Classrooms';
import SearchBar from './layout/SearchBar';
import store from '../store';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Room of Requirement</h1>
            </header>
            <SearchBar updateClassrooms={this.updateClassrooms} />
            <div className="Classrooms-list">
              <Classrooms />
            </div>
          </div>
        </Fragment>
      </Provider>
    );
  }
}

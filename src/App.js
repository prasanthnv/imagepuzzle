import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PuzzleContainer from './containers/Puzzle';
import Topbar from './components/Topbar';
import { Provider } from 'react-redux';
class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Topbar></Topbar>
          <PuzzleContainer></PuzzleContainer>
        </div>
      </Provider>
    );
  }
}

export default App;

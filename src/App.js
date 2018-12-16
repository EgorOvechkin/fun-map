import React, { Component } from 'react';
import YMap from './components/YMap';
import Input from './components/Input';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input onEnter={title => this.addPoint(title)} />
        <YMap />
      </div>
    );
  }

  addPoint(title) {
    debugger
  }
}

export default App;

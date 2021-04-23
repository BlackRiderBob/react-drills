import React, { Component } from 'react';
// import logo from "./logo.svg"
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      message: ""
    };
  }

  handleChange(value) {
    this.setState({ message: value });
  }

  render() {
    return (
      <div className="App">
        <imput onChange={e => this.handleChange(e.target.value)} type="text" />
        <p>What</p>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/header/Header'
import Main from './components/main/Main'
import './App.css';

class App extends Component {
  render() {
  return (
      <div id="app" className="">
        <Header />
        <Main />
    </div>
    );
  }
}

export default App;

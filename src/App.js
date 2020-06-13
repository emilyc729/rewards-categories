import React, { Component } from 'react';


import './App.css';

import Table from './components/Table/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Miles Take Home</header>
        <Table/>
      </div>
    );
  }
}

export default App;

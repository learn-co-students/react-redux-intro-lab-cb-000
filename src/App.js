import React, { Component } from 'react';
import { connect } from 'react-redux'

import InventoryList from './InventoryList'
import NewInventoryItem from './NewInventoryItem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
        </div>
      </div>
    );
  }
}

export default App;
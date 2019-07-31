import React, { Component } from 'react';
import {connect} from 'react-redux';
import InventoryList from '../src/InventoryList'
import NewInventoryItem from '../src/NewInventoryItem'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
        </div>
        <InventoryList inventoryItems={this.props.items}/>
        <NewInventoryItem />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {items: state.inventoryItemsList}
}

const connector = connect()
const connectedComponent = connector(App)

export default connectedComponent;

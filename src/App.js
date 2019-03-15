import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './actions/inventoryItemsActions'
import {bindActionCreators} from 'redux'
import NewInventoryItem from './NewInventoryItem'
import InventoryList from './InventoryList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
        </div>
        <InventoryList />
        <NewInventoryItem />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {inventoryItems: state.inventoryItems}
}
function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(App)

export default connectedComponent;

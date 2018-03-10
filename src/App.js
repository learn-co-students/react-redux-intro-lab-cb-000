import React, { Component } from 'react';
import { connect } from 'react-redux';
import InventoryList from './InventoryList';
import NewInventoryItem from './NewInventoryItem';
import { bindActionCreators } from 'redux';
import * as actions from './actions/inventoryItemsActions';

class App extends Component {
  
  ComponentWillMount() {
    this.props.actions.getInventoryListItems();
  }

  createItem(quantity, description) {
    this.props.actions.addInventoryListItem(quantity, description);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
          <InventoryList inventoryItems={this.props.inventoryListItems} />
          <NewInventoryItem createItem={this.createItem.bind(this)} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {inventoryListItems: state.inventoryListItems};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(App);

export default connectedComponent;

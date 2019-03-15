import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import NewInventoryItem from './NewInventoryItem'
import InventoryList from './InventoryList'
import * as actions from './actions/inventoryItemsActions'



class App extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }
  addItem = (quantity, description) => {
    this.props.actions.addInventoryListItem(quantity, description);
  }
  componentWillMount() {
    this.props.actions.getInventoryListItems() ;
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
        </div>
        <InventoryList items={this.props.inventoryItems} />
        <NewInventoryItem callback={this.addItem} />
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

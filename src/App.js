import React, { Component } from 'react';
import InventoryList from './InventoryList';
import NewInventoryItem from './NewInventoryItem';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
        </div>
				<InventoryList items={this.props.inventoryListItems} />
				<NewInventoryItem  addItem={this.createItem}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {inventoryListItems: state.inventoryListItems}
}

const connector = connect(mapStateToProps);
const connectedComponent = connector(App);

export default connectedComponent;

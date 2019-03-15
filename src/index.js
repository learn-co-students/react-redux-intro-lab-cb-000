import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {getInventoryItems} from './actions/inventoryItemsActions'
import App from './App';

const store = configureStore();
store.dispatch(getInventoryItems())

ReactDOM.render(
  <App />,
  document.getElementById('container')
);

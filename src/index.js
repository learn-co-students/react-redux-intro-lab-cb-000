import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

import {getInventoryListItems} from './actions/inventoryItemsActions';

const store = configureStore();

store.dispatch(getInventoryListItems());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);

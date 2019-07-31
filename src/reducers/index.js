import {combineReducers} from 'redux';
import inventoryItemsList from './inventoryItemsReducer';

const rootReducer = combineReducers({
  // short hand property names
  inventoryItemsList
})

export default rootReducer;

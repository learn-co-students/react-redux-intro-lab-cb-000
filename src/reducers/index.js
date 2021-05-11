import {combineReducers} from 'redux';
import inventoryItemsList from './inventoryItemsReducer';

const rootReducer = combineReducers({
  inventoryItemsList
})

export default rootReducer;
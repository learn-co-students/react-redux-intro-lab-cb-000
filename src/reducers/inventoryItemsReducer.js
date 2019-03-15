function inventoryItemsReducer(state=[], action){
  switch(action.type) {
    case 'GET_INVENTORY_LIST_ITEMS':
      return(action.payload)
    case 'ADD_INVENTORY_LIST_ITEMS':
      return(
        [...state, {
          description: action.payload.description,
          quantity: action.payload.quantity
        }]
      )
    default:
      return state
  }
}
export default inventoryItemsReducer

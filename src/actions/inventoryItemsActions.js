export function getInventoryListItems(){
  var itemList = [{quantity: '3lbs', description: "flour"}, {quantity: "2 dozen", description: "eggs"}, {quantity: '2lbs', description: "sugar"}];
  return {
    type: "GET_INVENTORY_LIST_ITEMS",
    payload: itemList
  }
}

export function addInventoryListItem(quant, descrip){
  return {
    type: "ADD_INVENTORY_LIST_ITEM",
    payload: {quantity: quant, description: descrip}
  }
}

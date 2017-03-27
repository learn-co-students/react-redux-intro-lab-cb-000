

function getInventoryItems () {
  const list = [
    {quantity: '3lbs', description: "flour"},
    {quantity: "2 dozen", description: "eggs"},
    {quantity: '2lbs', description: "sugar"}
  ]
  return {
    type: 'GET_INVENTORY_LIST_ITEMS',
    payload: list
  }
}

function addInventoryListItem (quantity, description) {
  const item = {quantity, description}
  return {
    type: 'ADD_INVENTORY_LIST_ITEM',
    payload: item
  }
}

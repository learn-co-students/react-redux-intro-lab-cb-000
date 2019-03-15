
import React, { Component } from 'react';


const InventoryList = (props) => {
  return (
    <div>
      <ul>
        {props.inventoryItems.map (function(element, i){
          return <li key={i} >item: {element.description}, quantity: {element.quantity}</li>
        })}
      </ul>
    </div>
  )
}
export default InventoryList ;

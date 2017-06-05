import React, { Component } from 'react'

const InventoryList = ({
  inventoryItems
}) => {
  return (
    <div>
      <ul>
        {
          inventoryItems.map((item, i) => {
            return <li key={i}>item: {item.description}, quantity: {item.quantity || 0}</li>
          })
        }
      </ul>
    </div>
  );
}

export default InventoryList;

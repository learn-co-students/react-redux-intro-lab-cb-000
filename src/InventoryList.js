import React from 'react'

const InventoryList = (props) => {
    return (
        <ul className="inventory-list">
            {props.items.map((item, i) => {
                return (
                    <li key={i} className="list-item">
                        Description: {item.description}
                        Qty: {item.quantity}
                    </li>
                )
            })}
        </ul>
    )
}

export default InventoryList

import React from 'react';

const InventoryList = (props) => {

	return (
		<ul className="">
		{props.inventoryItems.map((item, i) => {
			return <li key={i} className="list-group-item">
			item: {item.description}, quantity: {item.quantity}
			</li>
		})}
		</ul>
	)
}

export default InventoryList;

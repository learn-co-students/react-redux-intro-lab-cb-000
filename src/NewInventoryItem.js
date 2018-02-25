import React from 'react';

const NewInventoryItem = (props) => {
	console.log(props)
	function submitItemForm(e){
		e.preventDefault();
		const qty = e.target.children[1].value;
		const des = e.target.children[3].value;
		props.addItem(qty,des);
	}
	return (
		<form className="col-lg-6 col-lg-offset-3 form-horizontal" onSubmit={submitItemForm}>
		 <label>new item quantity:</label>
		 <input className="form-control"/>
			<label>new item description:</label>
		 <input className="form-control"/>
		 <input type="submit" />
	 </form>

	)
}

export default NewInventoryItem;

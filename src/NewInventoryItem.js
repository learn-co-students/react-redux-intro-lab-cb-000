import React from 'react';

const NewInventoryItem = props => {

  const handleSubmit = ev => {
    ev.preventDefault();
    const quantity = ev.target.children[1].value;
    const description = ev.target.children[3].value;
    props.createItem(quantity, description);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>quantity: </label>
      <input id='quantity' />
      <label>description: </label>
      <input id='description' />
      <input type='submit' />
    </form>
  )
}

export default NewInventoryItem;

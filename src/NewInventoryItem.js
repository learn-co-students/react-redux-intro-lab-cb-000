import React, { Component } from 'react'

const NewIventoryItem = (props) => {

  const submitItemForm = (ev) => {
    ev.preventDefault();
    const qty = ev.target.children[0].value;
    const desc = ev.target.children[1].value;

    props.triggerCreateItem(qty, desc);
  }

  return (
    <form onSubmit={submitItemForm}>
      <input type="text" name="quantity" />
      <input type="text" name="description" />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NewIventoryItem;

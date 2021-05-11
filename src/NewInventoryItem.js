import React from 'react';

const NewInventoryItem = () => {
  return(
    <form>
      <label>Description:</label>
      <input type='text'> </input>
      <label>Quantity:</label>
      <input type='text'> </input>
      <input type='submit'>Submit</input>
    </form>
  );
}

export default NewInventoryItem;

import React, { Component } from 'react';


const NewInventoryItem = (props) => {
  function handleSubmit(event){
    event.preventDefault() ;
    var quantity = document.querySelector('#quantity').value ;
    var description =  document.querySelector('#description').value ;
    props.callback(quantity, description) ;
  }
  return (
    <div>
      <form onSubmit={event => handleSubmit(event)} >
        <label for="quantity" />
        <input type="text" id="quantity" /><br></br>
        <label for="description" />
        Description: <input type="text" id="description" /><br></br>
        Submit: <input type="submit" id="submit_item" />
      </form>
    </div>
  )
}

export default NewInventoryItem ;

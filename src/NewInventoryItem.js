import React from 'react'

const NewInventoryItem = (props) => {
  function submittedForm(ev) {
    ev.preventDefault()
    const quantity = ev.target.children[1].value
    const description = ev.target.children[3].value
    props.handleCreateItem(quantity, description)
  }
    return (
      <form className="col-lg-6 col-lg-offset-3 form-horizontal" onSubmit={submittedForm}>
        <label>Quantity:</label>
        <input className="form-control" />
        <label>Description:</label>
        <input className="form-control" />
        <input type="submit" />
      </form>
    )
}

export default NewInventoryItem
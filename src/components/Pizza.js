import React from "react"

const Pizza = (props) => {
  const {size, topping, vegetarian} = props.pizza
  const veggie = vegetarian ? "Yes" : "No"
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{veggie}</td>
      <td><button onClick={() => props.editPizza(props.pizza)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza

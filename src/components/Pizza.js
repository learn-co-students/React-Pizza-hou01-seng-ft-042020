import React from "react"
import PizzaForm from "./PizzaForm"

const Pizza = (props) => {
  // console.log(props.pizza)
  let {topping, size, vegetarian} = props.pizza

  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian === 'true' || vegetarian === true ? "Yes" : "No"}</td>
      <td><button 
            type="button" 
            className="btn btn-primary"
            onClick={() => props.selectPizza(props.pizza)}
          >Edit Pizza</button>
      </td>
    </tr>
  )
}

export default Pizza

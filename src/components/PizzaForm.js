import React, { Component } from "react"

const PizzaForm = (props) => {
// debugger
console.log("FORM", props.pizzas)
  let {topping, size, vegetarian} = props.pizza
  return(
      <div className="form-row">
        <div className="col-5">
            <input 
              onChange={(e) => props.editPizzaValue(e)}
              name='topping'
              type="text" 
              className="form-control" 
              placeholder="Pizza Topping" 
              value={
                //Pizza Topping Should Go Here
                topping
              }/>
        </div>
        <div className="col">
          <select 
            onChange={(e) => props.editPizzaValue(e)}
            name='size'
            className="form-control"
            value={size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input 
              onChange={(e) => props.editPizzaValue(e)}
              name='vegetarian'
              type="radio" 
              className="form-check-input" 
              value={true}
              checked={vegetarian === 'true' ||  vegetarian === true ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input 
              onChange={(e) => props.editPizzaValue(e)}
              name='vegetarian'
              type="radio" 
              className="form-check-input" 
              value={false} 
              checked={vegetarian === 'false' ||  vegetarian === false ? true : false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button 
            onClick={(e) => props.handleSubmit(e)}
            type="submit" 
            className="btn btn-success">Submit</button>
        </div>
      </div>
  )
}

export default PizzaForm

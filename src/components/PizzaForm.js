import React from "react"

const PizzaForm = (props) => {
  // console.log(props.handleSubmit)
  return(
      <div className="form-row">
        <div className="col-5">
            <input
              type="text"
              className="form-control"
              placeholder="Pizza Topping"
              onChange={props.editTopping}
              value={props.editPizzaArray.topping}
              />
        </div>
        <div className="col">
          <select value={props.editPizzaArray.size} className="form-control" onChange={props.editSize}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            < input 
              className = "form-check-input"
              type = "radio"
              name = "veg"
              value = "Vegetarian"
              checked={props.editPizzaArray.vegetarian ? true : false}
              onChange={props.editVegetarian}
              />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            < input className = "form-check-input"
            type = "radio"
            name = "veg"
            value = "Not Vegetarian"
            checked={props.editPizzaArray.vegetarian ? false : true}
            onChange={props.editVegetarian}
            name='veg' />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={()=>props.handleSubmit(props)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm

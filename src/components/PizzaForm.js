import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input 
              onChange={(e) => props.editForm(e.target.value, "topping")} 
              type="text" 
              className="form-control" 
              placeholder="Pizza Topping" 
              value={props.topping} />
        </div>
        <div className="col">
          <select onChange={(e) => props.editForm(e.target.value, "size")} value={props.size} className="form-control">
            <option value=""></option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
          <input onChange={(e) => props.editForm(e.target.value, "vegetarian")} className="form-check-input" type="radio" value="Vegetarian" checked={props.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={(e) => props.editForm(e.target.value, "vegetarian")} className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
        <button type="submit" className="btn btn-success" onClick={props.updatePizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
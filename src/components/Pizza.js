import React from "react";

const Pizza = (props) => {
  const updatePizza = () => {
    props.editPizza(props.pizza.id);
  };

  return (
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={updatePizza}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;

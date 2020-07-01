import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    // console.log(this.props.editPizza)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.props.pizzas.map((pizza, i) => 
            <Pizza
              key={i}
              id={pizza.id}
              size={pizza.size}
              topping={pizza.topping}
              vegetarian={pizza.vegetarian}
              editPizza={this.props.editPizza}
            />
            )
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;

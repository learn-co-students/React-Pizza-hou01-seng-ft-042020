import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends Component {

  render() {
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
          {this.props.pizzas.map(pizza => (
            < Pizza pizza={pizza} selectPizza={this.props.selectPizza} key={pizza.id}/>
          ))}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;

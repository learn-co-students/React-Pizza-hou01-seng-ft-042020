import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

class App extends Component {
  state = {
    pizzas: [],
    pizzaToEdit: {
      topping: "",
      size: "Small",
      vegetarian: false,
    },
  };

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then((res) => res.json())
      .then((pizzas) => {
        this.setState({
          pizzas: pizzas,
        });
      });
  }

  editPizza = (id) => {
    const pizza = this.state.pizzas.find((pizza) => pizza.id === id);
    this.setState({
      pizzaToEdit: pizza,
    });
  };

  changeTopping = (e) => {
    this.setState({
      ...this.state,
      pizzaToEdit: {
        ...this.state.pizzaToEdit,
        topping: e.target.value,
      },
    });
  };

  changeSize = (e) => {
    this.setState({
      ...this.state,
      pizzaToEdit: {
        ...this.state.pizzaToEdit,
        size: e.target.value,
      },
    });
  };

  changeVeg = (e) => {
    const value = e.target.value === "Vegetarian" ? true : false;
    this.setState({
      ...this.state,
      pizzaToEdit: {
        ...this.state.pizzaToEdit,
        vegetarian: value,
      },
    });
  };

  handleSubmit = (e) => {
    const updatedPizza = this.state.pizzaToEdit;

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        topping: updatedPizza.topping,
        size: updatedPizza.size,
        vegetarian: updatedPizza.vegetarian,
      }),
    };
    fetch(
      `http://localhost:3000/pizzas/${updatedPizza.id}`,
      options
    ).then((res) => res.json());

    const pizzas = this.state.pizzas;
    const oldPizza = pizzas.find((pizza) => pizza.id === updatedPizza.id);
    const index = pizzas.indexOf(oldPizza);
    pizzas.splice(index, 1, updatedPizza);
    this.setState({
      pizzas: pizzas,
    });
  };
  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          pizzaToEdit={this.state.pizzaToEdit}
          changeTopping={this.changeTopping}
          changeSize={this.changeSize}
          changeVeg={this.changeVeg}
          handleSubmit={this.handleSubmit}
        />
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;

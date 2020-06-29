import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzaCollection: [],
    id: "",
    topping: "",
    size: "",
    vegetarian: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
      .then(res => res.json())
      .then(pizzas => {
        this.setState({
          pizzaCollection: pizzas
        })
      })
  }

  editPizza= (p) => {
      this.setState({
        id: p.id,
        topping: p.topping,
        size: p.size,
        vegetarian: p.vegetarian
      })
  }

  editForm = (value, key) => {
    this.setState({
      [key]: value
    })
    // console.log(value)
    // console.log(key)
  }

  updatePizza = () => {
    const options = {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian
      })
    }
    fetch(`http://localhost:3000/pizzas/${this.state.id}`, options)
      .then(res => res.json())
      .then(newPizza => {
        let newPizzas = this.state.pizzaCollection.map(ogPizza => ogPizza.id === newPizza.id ? newPizza : ogPizza)
        this.setState({
          pizzaCollection: newPizzas,
          id: "",
          topping: "",
          size: "",
          vegetarian: ""
        })
      })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian} editForm={this.editForm} updatePizza={this.updatePizza} />
        <PizzaList pizzas={this.state.pizzaCollection} editPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;

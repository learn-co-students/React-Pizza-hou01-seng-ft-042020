import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizza: null,
    editPizzaArray: {
      topping: null,
      size: null,
      vegetarian: null
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/pizzas')
      .then( res => res.json())
      .then( pizzaArray =>{
        this.setState({
          pizza: pizzaArray
        })
      })
  }

  

  editPizza = (props) => {
    // console.log(props.id)
    this.setState({
      editPizzaArray: {
        topping: props.topping,
        size: props.size,
        vegetarian: props.vegetarian,
        id: props.id
      }
    })
  }

  editTopping = (e) => {
    // console.log(e.target.value)
    this.setState({
      ...this.state,
      editPizzaArray: {
        ...this.state.editPizzaArray,
        topping: e.target.value
      }
    })
  }

  editSize = (e) => {
    this.setState({
      ...this.state,
      editPizzaArray: {
        ...this.state.editPizzaArray,
        size: e.target.value
      }
    })
  }

  editVegetarian = (e) => {
    // console.log(e.target.value)
    const vegetarianValue = (e.target.value === 'Vegetarian' ? true: false)
    this.setState({
      ...this.state,
      editPizzaArray: {
        ...this.state.editPizzaArray,
        vegetarian: vegetarianValue
      }
    })
  }

  handleSubmit = () => {
    // console.log(this.state.editPizzaArray.id)
    const updatedPizza = this.state.editPizzaArray
    // console.log(pizzaId)
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        topping: updatedPizza.topping,
        size: updatedPizza.size,
        vegetarian: updatedPizza.vegetarian
      })
    }
    // debugger
    fetch(`http://localhost:3000/pizzas/${updatedPizza.id}`, options)
      .then((res) => res.json())
      .then(newPizza => {
        let newPizzaArray = this.state.pizza.map(pizza => pizza.id === newPizza.id ? newPizza : pizza)
        this.setState({
          pizza: newPizzaArray,
          editPizzaArray: {
            topping: null,
            size: null,
            vegetarian: null
          }
        })
      })
    // console.log(updatedPizza.id)
      // .then(newPizza => {
      //   let newPizzas = this.state.pizza.map(pizza => pizza.id === newPizza.id ? newPizza : pizza)
      //   this.setState({
      //     pizza: newPizzas,
      //     id: "",
      //     topping: "",
      //     size: "",
      //     vegetarian: ""
      //   })
      // })


  }

  render() {
    if (this.state.pizza === null) {
      return <h1>Loading...</h1>
    }
    // console.log(this.state.editPizzaArray.id)
    return (
      <Fragment>
        <Header />
        <PizzaForm
          editPizzaArray={this.state.editPizzaArray}
          editTopping={this.editTopping}
          editSize={this.editSize}
          editVegetarian={this.editVegetarian}
          handleSubmit={this.handleSubmit}
        />
        <PizzaList
          pizzas={this.state.pizza}
          editPizza={this.editPizza}
        />
      </Fragment>
    );
  }
}

export default App;

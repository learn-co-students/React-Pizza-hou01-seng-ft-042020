import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [],
    pizza: {id: null, topping: '', size: '', vegetarian: null}
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
      .then(res => res.json())
      .then(pizzas => this.setState({pizzas}))
  }

  selectPizza = (pizza) => {
    console.log("Edit", pizza)
    this.setState({
      pizza: {...pizza}
    })
  }
  
  editPizzaValue = (e) => {
    console.log("TARGET", e.target)
    this.setState({
      pizza: {
        ...this.state.pizza,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.updatePizzaDb()
    // this.updatePizzaList()
    // this.resetForm()
  }

  updatePizzaDb() {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.pizza)
    }

    fetch(`http://localhost:3000/pizzas/${this.state.pizza.id}`, options)
      .then(res => res.json())
      .then(newPizza => {
        console.log("NEW", newPizza)
        let newPizzas =  this.state.pizzas.map(p => p.id === newPizza.id ? newPizza : p)
        this.setState({
          pizzas: newPizzas,
          pizza: {id: null, topping: '', size: '', vegetarian: null}
        })
      })  
  }
  
  // resetForm = () => {
  //   this.setState({pizza: {id: null, topping: '', size: '', vegetarian: null}})
  // }

  // updatePizzaList = () => {
  //   let newPizzas = [...this.state.pizza].map(p => {
  //     return (p.id === this.state.id ? this.state.pizza : p)
  //   })
  //   this.setState({pizzas: newPizzas})
  // }


  render() {
    console.log("PIZZAS",this.state.pizzas)
    console.log("EDITFORM",this.state.updatedPizza)
    if(this.state.pizzas == null){
      return <h1 style={{color: "red"}}>Lording...</h1>
    }
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          pizza={this.state.pizza} 
          editPizzaValue={this.editPizzaValue} 
          handleSubmit={this.handleSubmit}/>
        <PizzaList 
          pizzas={this.state.pizzas} 
          selectPizza={this.selectPizza}/>
      </Fragment>
    );
  }
}

export default App;

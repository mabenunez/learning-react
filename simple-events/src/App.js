import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      btnText : "Click me",
      clicked : false
    }
    this.changeBtnMessage = this.changeBtnMessage.bind(this)
  }

  changeBtnMessage(){
    this.setState ({
      clicked : true,
      btnText : "Click again!"
    })
  }
  render () {
    return (
      <div>
        <button onClick= {this.changeBtnMessage}>
          { this.state.btnText }
        </button>
      </div>
    )
  }
}

{/* 
Con el fin de comprender en profundidad el concepto, uso y detalles de los eventos en React, se desarrollara una aplicación que nos permita:

Tener un boton, que al hacer click cambie el estado interno de esa componente (verificar el estado con las react dev tools)
Tener un <div> que contenga un texto: al pasar el mouse por arriba deberá agregar un texto que diga “inside” en otro div. Al perder foco, se deberá hacer desaparecer el texto de “inside”

*/}

export default App;

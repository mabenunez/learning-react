import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      btnText : "Click me",
      clicked : false,
      otherDivClass : "hidden"
    }
    this.changeBtnMessage = this.changeBtnMessage.bind(this);
    this.appearSideDiv = this.appearSideDiv.bind(this);
    this.dissapearDiv = this.dissapearDiv.bind(this);
  }

  changeBtnMessage(){
    if (this.state.btnText === "Click me") {
      this.setState ({btnText : "Click again!"})
    } else {
      this.setState ({btnText : "Click me"})
    }
  }
  appearSideDiv(){
    if (this.state.otherDivClass === "hidden") {
      this.setState ({otherDivClass : ""})
    }
  }
  dissapearDiv () {
    this.setState({ otherDivClass : "hidden" })
  }
  render () {
    return (
      <div>
        <button onClick = {this.changeBtnMessage}>
          { this.state.btnText }
        </button>
        <div>
          <div onMouseOver = {this.appearSideDiv} onMouseOut = { this.dissapearDiv }>
            <p>Soy un div!</p>
          </div>
          <div className = {this.state.otherDivClass}>
            <p>Y yo otro!</p>
          </div>
        </div>
      </div>
    )
  }
}

{/* 
Se desarrollara una aplicación que nos permita:

Tener un boton, que al hacer click cambie el estado interno de esa componente (verificar el estado con las react dev tools)
Tener un <div> que contenga un texto: al pasar el mouse por arriba deberá agregar un texto que diga “inside” en otro div. Al perder foco, se deberá hacer desaparecer el texto de “inside”

*/}

export default App;

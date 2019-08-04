import React, { Component } from 'react'; 
//If you didn't import { Component } you'd have to declare "class App extends React.Component"

class App extends Component {
  constructor (){
    super()
    this.state = {
      color: 'red'
    }
    this.changeColor = this.changeColor.bind(this);
    //always bind 'this' to functions described outside the constructor()

    setTimeout( this.changeColor, 3000);
    //setTimeout will execute because the constructor() method is fired before the component is mounted.
    //is a method that’s automatically called during the creation of an object from a class. It can handle your initial setup stuff like defaulting some properties of the object, or sanity checking the arguments that were passed in.
  }
  changeColor() {
    this.setState ({
      color: 'green'
    })
  }
  render () {
    return (
      <div>
        <h1>{ this.state.color }</h1>
      </div>
    )
  }
}
export default App;

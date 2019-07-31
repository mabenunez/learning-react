import React from 'react';
import './App.css';

class GreenToRed extends React.Component {
  constructor (){
    super();
    
    this.state = {
      color : "red"
    };

    this.changeWord = this.changeWord.bind(this);

    setTimeout(this.changeWord , 5000);
    
  }
  changeWord() {
    this.setState ({
      color: "green"
    })
  }; 
  render() {
    return (
      <div className="App"><h1>{this.state.color}</h1></div>
    );
  }
}

export default GreenToRed;

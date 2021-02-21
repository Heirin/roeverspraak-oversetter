import './App.css';
import React, { Component } from "react";
import Input from "./Input";

class App extends Component {
  state = {
    translation: "",
    toRoeverVisible: true
  }

  isConsonant = char => {
    const toLower = char.toLowerCase();
    const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
    return consonants.includes(toLower);
  }

  toRoever = event => {
    const charArray = event.target[0].value.split("");
    const newArray = charArray.map(char => {
      let res = char;
      if (this.isConsonant(char)){
        res = char + "o" + char.toLowerCase();
      }
      return res;
    });
    const newText = newArray.join("");
    this.setState({translation: newText});
    event.preventDefault();
  }

  fromRoever = event => {
    const charArray = event.target[0].value.split("");
    const newArray = [];
    for (let i = 0; i < charArray.length; i++){
      let char = charArray[i];
      if(this.isConsonant(char)){
        i = i+2;
      }
      newArray.push(char);
    }
    const newText = newArray.join("");
    this.setState({translation: newText});
    event.preventDefault();
  }

  toggleHidden = id => {
    const isVisible = this.state.toRoeverVisible;
    let classname = "";
    if (id === "toRoever"){
      classname = (isVisible ? "" : "hidden");
    }if (id === "fromRoever"){
      classname = (isVisible ? "hidden" : "");
    }
    return classname;
  }

  toggleVisibility = () => {
    const isVisible = this.state.toRoeverVisible;
    this.setState({toRoeverVisible: !isVisible});
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <h1>Oversetter for røverspråk</h1>
          <button className="toggle" onClick={this.toggleVisibility}>Toggle</button>
          <Input class={this.toggleHidden("toRoever")} submit={event => this.toRoever(event)} text="Til Røverspråk" />
          <Input class={this.toggleHidden("fromRoever")} submit={event => this.fromRoever(event)} text="Fra Røverspråk" />
          <p>{this.state.translation}</p>
        </div>
      </div>
    );
  }
}

export default App;

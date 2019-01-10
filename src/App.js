import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let  arr =['a' , 'b' , 'c'];
class Hello extends Component {
  render() {
    return (
      <div>
        <ul>
          {arr.map((element, index) => {
            return (
              <li key={index} onClick={this.handleClick.bind(this)}>{element}</li>
            )
          })}
        </ul>
      </div>
    );
  }
  handleClick(){
    console.log(this)
  }

}



class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
      </div>
    );
  }
}

export default App;

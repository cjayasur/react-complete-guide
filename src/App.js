import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


/*
  class App extends Component{
    render(){
      
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hi I am a React App my code is in <code>~/react-complete-guide/src/App.js</code>.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Goto this page to Learn React
            </a>
          </header>
        </div>
      );
      
    }  
}

export default App;
*/

class App2 extends Component{
    render(){

    return React.createElement('div',{className: 'App'},React.createElement('h1',null,'writing html via react to the DOM')) 
    }  
}
export default App2;


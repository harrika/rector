import React, {Component} from 'react';
import './App.css';
import Senator from './comps/Senator';
//import Welcome from './comps/Welcome';

class App extends Component {
  render(){
  return(
    <div className="App">
      <Senator />           
    </div>
  );
  }
}

export default App;

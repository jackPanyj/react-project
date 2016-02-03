import React,{ Component } from "react";
import Home from './Home';
import './style/main.scss';
class App extends Component {

  render(){
    return (
        <div className="app-wrap">
          <div className="app-header">my header</div>
          <Home />
          <div className= "app-footer"> my footer</div>
        </div>
      )
  }
}

export default App;
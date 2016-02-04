import React,{ Component } from "react";
import Home from './Home';
import NavBar from './shared/NavBar.js';
import './style/main.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class App extends Component {

  render(){
    return (
        <div className="app-wrap">
          <NavBar />
          <div className="app-header">my header</div>
          <Home />
          <div className= "app-footer"> my footer</div>
        </div>
      )
  }
}

export default App;
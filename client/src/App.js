import React, { Component } from 'react';
// import router from react-router-dome npm/package
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Search from "./Search";
import Save from "./Save";

class App extends Component {
  
  render() {

    return (
      <Router>
        <Switch>
          {/* navigating to between two pages by exact path="" */}
          <Route exact path="/search"> <Search /></Route>
          <Route exact path="/save"> <Save /> </Route>

        </Switch>
      </Router>
    )
  }
}

export default App;

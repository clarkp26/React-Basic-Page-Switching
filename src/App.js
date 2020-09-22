
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

//Pages
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";



class App extends Component{
  render(){
    return (
    <Router>
      <Switch>
      <Route exact path="/page1" component={Page1} />
      <Route exact path="/page2" component={Page2}/>
      <Route exact path="/page3" component={Page3}/>

      <Redirect to="/page1"/>
      </Switch>
    </Router>
    );
  }
}
export default App;


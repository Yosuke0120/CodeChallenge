import logo from './logo.svg';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Users } from "./user/pages/Users";
import React from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/users'>
          <Users/>
        </Route>
        <Route path='/'>
          <Users/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

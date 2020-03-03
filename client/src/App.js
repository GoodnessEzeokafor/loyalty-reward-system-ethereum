import React, { Component } from 'react';
import Aux from "./hoc/aux";
import Jumbotron from "./components/Jumboton"
import MemberSignUp from "./components/MemberSignUp"
import { 
  Link,
  Route,
  Switch, 
  BrowserRouter as Router } from "react-router-dom"
import Web3 from 'web3';
import LoyaltyDapp from '../abis/Loyalty.json'
  
export default class App extends Component {
  render() {
    return (
      <Router>
      <Aux>
      <Switch>
              <Route path="/member-signup">
                <MemberSignUp />
              </Route>
              <Route exact path="/">
              <Jumbotron />
            </Route>
            </Switch>
      
    </Aux>
</Router>
    );
  }
}

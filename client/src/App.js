import React, { Component } from 'react';
import Aux from "./hoc/aux";
import Jumbotron from "./components/Jumboton"

export default class App extends Component {
  render() {
    return (
      <Aux>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container">

  <a class="navbar-brand" href="#">Loyalty Reward System</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


</div>
</nav>
<Jumbotron />
</Aux>
    );
  }
}

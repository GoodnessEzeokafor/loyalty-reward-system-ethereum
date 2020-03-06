import React from 'react';
import { 
  Link,
  Route,
  Switch, 
  BrowserRouter as Router } from "react-router-dom"

const Nav = () => {
    return(
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container">

  <Link class="navbar-brand" to="/">LoyalChain</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarsExample01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/member-dashboard">Dashboard <span class="sr-only">(current)</span></Link>
      </li>
    </ul>
  </div>

</div>
</nav>
    );
}

export default Nav
import React, { Component } from 'react';

import Nav from "./Nav"
import Aux from "../hoc/aux";
import { withRouter } from 'react-router-dom';





class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.memberHandleButton = this.memberHandleButton.bind(this)
    this.patnerHandleButton = this.patnerHandleButton.bind(this)
  }
  

  async  memberHandleButton(e) {
    this.props.history.push('/member-signup')
    e.preventDefault()
}

async patnerHandleButton(e){
  this.props.history.push('/patner-signup')
  e.preventDefault()
}
  
  render() {
    return (
      <Aux>
      <Nav/>
        <main role="main">

  {/* <!-- Main jumbotron for a primary marketing message or call to action --> */}
  <div class="jumbotron">
    <div class="container">
      <h1 class="display-3">LoyalChain</h1>
      <p>   
        This web application demonstrates a customer loyalty program on the blockchain using ethereum & solidity
      </p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
    </div>
  </div>

  <div class="container">
    {/* <!-- Example row of columns --> */}
    <div class="row">
      <div class="col-md-6">
        <h2>Members</h2>
        <p>
          Customer can register as Member to this program by creating an account using metamask wallet
          Once connected to the ethereum kovan testnet you can start making transactions to earn points and use points, and view transaction 
        </p>
        <p><button 
          class="btn btn-danger" 
           type="button"
           onClick={this.memberHandleButton}>Member Signup &raquo;</button></p>
      </div>
      <div class="col-md-6">
        <h2>Patners</h2>
        <p>
          For companies part of the program, they can register as Partner on the network by connecting with Metamask wallet

        </p>
        <p><button 
            class="btn btn-danger" 
            href="#" 
            type="button"
            onClick={this.patnerHandleButton}
            >Patners Signup &raquo;</button></p>
      </div>
    </div>

    <hr />

  </div> 
  
</main>
</Aux>
   
    );
  }
} 
// const Jumbotron = () => {
//     return(
//     );
// }

// export default Jumbotron;

export default withRouter(Jumbotron);

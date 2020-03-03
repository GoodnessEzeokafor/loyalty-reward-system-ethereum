import React from 'react';



const handleButton = (e) => {

  console.log("Hello World!!")
  e.preventDefault()
}


const Jumbotron = () => {
    return(
        <main role="main">

  {/* <!-- Main jumbotron for a primary marketing message or call to action --> */}
  <div class="jumbotron">
    <div class="container">
      <h1 class="display-3">Customer Reweard System</h1>
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
           onClick={handleButton}>Connect With Metamask &raquo;</button></p>
      </div>
      <div class="col-md-6">
        <h2>Patners</h2>
        <p>
          For companies part of the program, they can register as Partner on the network by connecting with Metamask wallet

        </p>
        <p><a class="btn btn-danger" href="#" role="button">Connect With Metamask &raquo;</a></p>
      </div>
    </div>

    <hr />

  </div> 
  
</main>

    );
}

export default Jumbotron;


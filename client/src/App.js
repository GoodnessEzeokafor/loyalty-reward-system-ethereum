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
import LoyaltyDapp from './abis/Loyalty.json'
  
export default class App extends Component {

  async componentWillMount(){
    await this.loadWeb3() 
    await this.loadBlockchainData()
  }
  async loadWeb3(){
    window.addEventListener('load', async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
          window.web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
          const web3 = window.web3
          // // load accounts
          const accounts = await web3.eth.getAccounts() // returns all the account in our wallet 
          console.log(accounts)

          // console.log("Window Ethereum Enabled")
      }
      // Legacy dapp browsers...
      else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider);
          
      }
      else {
          alert("Non-Ethereum browser detected. You should consider trying MetaMask!")
          console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
  });
  }

  //load Blockchain Data
  async loadBlockchainData(){
    // console.log(ProductDapp)
    window.web3 = new Web3(window.ethereum)
    const web3 = window.web3
    // // load accounts
    const accounts = await web3.eth.getAccounts() // returns all the account in our wallet 
    // this.setState({'account':accounts[0]})
    console.log(accounts)

    // // detects the network dynamically 
    const networkId = await web3.eth.net.getId()

    // // get network data
    const networkData = LoyaltyDapp.networks[networkId]
    // console.log("Network Id:",networkId)
    // console.log("Network Data:", networkData)

    if(networkData){
      const loyaltyDapp = new web3.eth.Contract(LoyaltyDapp.abi, networkData.address) // loads the smart contract
      // console.log(MarketPlaceDapp)
      // this.setState({MarketPlaceDapp}) // updates the state
      // // // console.log("Contract:", this.state.productDapp)
      // const productCount = await MarketPlaceDapp.methods.productCount().call() 
      // const farmerCount = await MarketPlaceDapp.methods.farmerCount().call()
      // this.setState({productCount})
      // this.setState({farmerCount})
      // this.setState({buyerCount})
      // this.setState({transportCompanyCount})

      // const productDappName = await productDapp.methods.dapp_name().call()
      // this.setState({productDappName})

      // console.log("Product Count:", this.state.productCount)


      // Load Seller
      // for(var j=1; j <= sellerCount; j++){
      //   const seller = await productDapp.methods.sellers(j).call()
      //   this.setState({
      //     sellers:[...this.state.sellers, seller]
      //   })
      // }

      // // Load Product
      // for(var i=1; i <= productCount; i++){
      //   const product = await MarketPlaceDapp.methods.products(i).call()
      //   this.setState({
      //     products:[...this.state.products, product]
      //   })
      // }

   
    }
    else {
      window.alert("Marketplace contract is not deployed to the network")
    }
  }
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

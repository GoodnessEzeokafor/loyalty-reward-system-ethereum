import React, { Component } from 'react';
import Aux from "./hoc/aux";
import Jumbotron from "./components/Jumboton"
import MemberSignUp from "./components/MemberSignUp"
import PartnerSignUp from "./components/PartnerSignUp"
import Thank from "./components/Thanks"
import { 
  Link,
  Route,
  Switch, 
  BrowserRouter as Router } from "react-router-dom"
// import { browserHistory } from 'react-router-dom';

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
    this.setState({'account':accounts[0]})
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
      this.setState({loyaltyDapp}) // updates the state
      // // console.log("Contract:", this.state.productDapp)
      const partnerCount = await loyaltyDapp.methods.partnerCount().call() 
      const memberCount = await loyaltyDapp.methods.memberCount().call()
      this.setState({partnerCount})
      this.setState({memberCount})
      // this.setState({buyerCount})
      // this.setState({transportCompanyCount})

      // const productDappName = await productDapp.methods.dapp_name().call()
      // this.setState({productDappName})

      // console.log("Product Count:", this.state.productCount)


      // Load members
      for(var j=1; j <= memberCount; j++){
        const member = await loyaltyDapp.methods.members(j).call()
        this.setState({
          members:[...this.state.members, member]
        })
      }

      // // Load Partner
      for(var i=1; i <= partnerCount; i++){
        const partner = await loyaltyDapp.methods.partners(i).call()
        this.setState({
          partners:[...this.state.partners, partner]
        })
      }

   
    }
    else {
      window.alert("Marketplace contract is not deployed to the network")
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account:'',
      partners:[],
      members:[]
    }
  }
  render() {
    return (
      <Router>
      <Aux>
      <Switch>
              <Route path="/member-signup">
                <MemberSignUp 
                loyaltyDapp ={this.state.loyaltyDapp}
                account = {this.state.account}
                />
              </Route>
              <Route path="/patner-signup">
                <PartnerSignUp 
                        loyaltyDapp ={this.state.loyaltyDapp}
                        account = {this.state.account}
                  />
              </Route>
              <Route path="/thank">
                <Thank />
              </Route>
              
              <Route exact path="/">
              <Jumbotron 
                    loyaltyDapp ={this.state.loyaltyDapp}
                    account = {this.state.account}
              />
            </Route>
            </Switch>
      
    </Aux>
</Router>
    );
  }
}

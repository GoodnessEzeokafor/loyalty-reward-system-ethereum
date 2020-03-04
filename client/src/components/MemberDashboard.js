import React, { Component } from 'react';
import Nav from "./Nav"
import Aux from "../hoc/aux"
import { 
  Link,
  Route,
  Switch, 
  BrowserRouter as Router } from "react-router-dom"
  import { withRouter } from 'react-router-dom';

 class MemberDashboard extends Component {
  constructor(props) {
    super(props);
    
  }
  
  async  getPartner(id) {
    const getPartner = await this.props.loyaltyDapp.methods
      .getPartner(id)
      .call();
    console.log("Writing To The Blockchain");
    console.log(getPartner);
    return getPartner;
  }

    render() {
      return (
        <Aux>
        <Nav />
        <main role="main">

        {/* <!-- Main jumbotron for a primary marketing message or call to action --> */}
        <div class="jumbotron">
          <div class="container">
            <h1 class="display-3">Member Dashboard</h1>
            <p>
                <b>ACCOUNT:</b>{this.props.account}
            </p>
            <p>   
                <b>POINTS:</b> {this.props.points}
            </p>
          </div>
        </div>
      
        <div class="container">
          {/* <!-- Example row of columns --> */}
          <div class="row">
            {this.props.partners.map((partner, key) => {
              return(
                <div class="col-md-4" key={key}>
            <h2><Link 
                to={`/partner-dashboard/${partner.id}`}
                >{partner.organisation_name} <small>company</small></Link></h2>
              <p>Address: {partner.organisation_address}</p>
            <p>Total Points: {partner.totalPoints}</p>
            <p><button
            value = "30"
            type="button"
            onClick = { (e) => {
              const value = parseInt(e.target.value, 10)
              const partnerId = parseInt(partner.id, 10)
              console.log(partnerId)
              console.log(value)
              this.props.loyaltyDapp.methods.earnPoint(partnerId,value)
              .send({from: this.props.account })
              .once('receipt',(receipt) => {
                this.setState({loading:false})
                alert("Transaction was successful")

              })
              e.preventDefault()
              e.persist()
            }}
            >Buy X For $10 and earn 30 Points</button></p>
            <p><button
                value = "50"
                type="button"
                onClick = {(e) => {
                  const value = parseInt(e.target.value, 10)
                  const partnerId = parseInt(partner.id, 10)
                  console.log(partnerId)
                  console.log(value)
                  this.props.loyaltyDapp.methods.earnPoint(partnerId,value)
                  .send({from: this.props.account })
                  .once('receipt',(receipt) => {
                    this.setState({loading:false})
                    alert("Transaction was successful")

                  })

                  e.preventDefault()
                  e.persist() 
                }}
              >Buy Y For $20 and earn 50 Points
              </button></p>
            <p><button
              value="60"
              type="button"
              onClick = {(e) => {
                const value = parseInt(e.target.value, 10)
                const partnerId = parseInt(partner.id, 10)
                console.log(partnerId)
                console.log(value)
                this.props.loyaltyDapp.methods.earnPoint(partnerId,value)
                .send({from: this.props.account })
                .once('receipt',(receipt) => {
                  this.setState({loading:false})
                  alert("Transaction was successful")

                })

                e.preventDefault()
                e.persist() 
              }}
            >Buy Z For $30 and earn 60 Points</button></p>
            
                </div>
              );
            })}

          </div>
          <hr />
        </div> 
        
      </main>
      </Aux>

      );
    }
  }

export default MemberDashboard;
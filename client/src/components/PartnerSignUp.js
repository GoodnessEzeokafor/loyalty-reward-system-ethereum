import React from 'react';
import Nav from "./Nav"
import Aux from "../hoc/aux"
import { withRouter } from 'react-router-dom';

const PartnerSignUp = (props) => {

  let organisation_name = null
  let organisation_address = null
  let email = null
  let point = null

  function handleSubmit(e){
    try{
      props.loyaltyDapp.methods.createPartner(
        organisation_name.value,
        organisation_address.value,
        email.value,
        parseInt(point.value, 10)
      )
      .send({from:props.account})
      .once('receipt',(receipt) => {
        this.setState({loading:false})
        console.log(receipt)
      })
      props.history.push('/thank')   
    }catch(e){
      console.log(e)
    }
    e.preventDefault()
  }
    return(
        <Aux>
        <Nav />
        <main role="main">

        {/* <!-- Main jumbotron for a primary marketing message or call to action --> */}
        <div class="jumbotron">
          <div class="container">
            <h1 class="display-3">Partner SignUp</h1>
            <p>   
                Provide Your Company  Details and Info
            </p>
            <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
          </div>
        </div>
      
        <div class="container">
          {/* <!-- Example row of columns --> */}
          <div class="row">
            <div class="col-md-7">
                <form onSubmit ={handleSubmit}>
                    <div class="form-group">
                      <label for="">Organisation Name</label>
                      <input type="text"
                        class="form-control" 
                        name="" 
                        id="" aria-describedby="helpId" 
                        placeholder="Organisation Name" 
                        ref={(input) => organisation_name = input}/>
                      <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                    <div class="form-group">
                      <label for="">Organisation Address</label>
                      <input type="text"
                        class="form-control" name="" id="" aria-describedby="helpId" 
                        placeholder="Organisation Address" 
                        ref={(input) => organisation_address = input }
                        />
                      <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                    <div class="form-group">
                      <label for=""></label>
                      <input 
                        type="email" 
                        class="form-control" name="" id="" aria-describedby="emailHelpId" 
                        placeholder="Enter Email" 
                        ref={(input) => email = input}/>
                      <small id="emailHelpId" class="form-text text-muted">Help text</small>
                    </div>
                    <div class="form-group">
                      <label for=""></label>
                      <input 
                        type="text" 
                        class="form-control" name="" id="" aria-describedby="emailHelpId" 
                        placeholder="Enter Points" 
                        ref={(input) => point = input}/>
                      <small id="emailHelpId" class="form-text text-muted">Help text</small>
                    </div>
                    
                    <button
                        type="submit" 
                         name="" id="" class="btn btn-primary btn-lg btn-block" >Submit</button>
                </form>
            </div>
          </div>
          <hr />
        </div> 
        
      </main>
     </Aux> 
    )
}

export default withRouter(PartnerSignUp);
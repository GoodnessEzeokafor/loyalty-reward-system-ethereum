import React from 'react';
import Nav from "./Nav";
import Aux from "../hoc/aux";
import { withRouter } from 'react-router-dom';




const MemberSignUp = (props) => {



  let first_name = null
  let last_name = null
  let email = null
  let phone_number = null

  // hanle form
  function handleSubmit(e){
  console.log(first_name.value)
  console.log(last_name.value)
  console.log(email.value)
  try{

  props.loyaltyDapp.methods.createmember(
    first_name.value,
    last_name.value,
    email.value,
    phone_number.value
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
            <h1 class="display-3">Member SignUp</h1>
            <p>   
                Provide Your Details
            </p>
            <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
          </div>
        </div>
      
        <div class="container">
          {/* <!-- Example row of columns --> */}
          <div class="row">
            <div class="col-md-7">
                <form onSubmit={handleSubmit} >
                    <div class="form-group">
                      <label for="">First Name</label>
                      <input type="text"
                        class="form-control" 
                        name="" 
                        id="" 
                        aria-describedby="helpId" 
                        placeholder="Enter First Name"
                        required
                        ref = {(input) => first_name = input}
                        />
                      <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                    <div class="form-group">
                      <label for="">Last Name</label>
                      <input type="text"
                        class="form-control" 
                        name=""
                        id="" 
                        aria-describedby="helpId" 
                        placeholder="Enter Last Name" 
                                                required

                        ref = {(input) => last_name = input}
                        />
                      <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                    <div class="form-group">
                      <label for=""></label>
                      <input 
                        type="email" 
                        class="form-control" name="" id="" aria-describedby="emailHelpId" 
                        placeholder="Enter Email" 
                            required

                        ref={(input) => email = input}
                        />
                      <small id="emailHelpId" class="form-text text-muted">Help text</small>
                    </div>
                    <div class="form-group">
                      <label for=""></label>
                      <input 
                        type="text" 
                        class="form-control" name="" id="" aria-describedby="emailHelpId" 
                        placeholder="Enter Phone" 
                            required

                        ref={(input) => phone_number = input}
                        />
                      <small id="emailHelpId" class="form-text text-muted">Help text</small>
                    </div>
                    <button 
                      type="submit" 
                      name="" 
                      id="" 
                      class="btn btn-primary btn-lg btn-block" 
                      
                      >Submit</button>
                </form>
            </div>
          </div>
          <hr />
        </div> 
        
      </main>
     </Aux> 
    )
}

export default withRouter(MemberSignUp);
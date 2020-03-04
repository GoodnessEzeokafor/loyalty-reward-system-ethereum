import React from 'react';
import Nav from "./Nav"
import Aux from "../hoc/aux"
const PartnerSignUp = () => {
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
                <form>
                    <div class="form-group">
                      <label for="">Organisation Name</label>
                      <input type="text"
                        class="form-control" name="" id="" aria-describedby="helpId" placeholder="Organisation Name" />
                      <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                    <div class="form-group">
                      <label for="">Organisation Address</label>
                      <input type="text"
                        class="form-control" name="" id="" aria-describedby="helpId" placeholder="Organisation Address" />
                      <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                    <div class="form-group">
                      <label for=""></label>
                      <input 
                        type="email" 
                        class="form-control" name="" id="" aria-describedby="emailHelpId" 
                        placeholder="Enter Email" />
                      <small id="emailHelpId" class="form-text text-muted">Help text</small>
                    </div>
                    <div class="form-group">
                      <label for=""></label>
                      <input 
                        type="text" 
                        class="form-control" name="" id="" aria-describedby="emailHelpId" 
                        placeholder="Enter Points" />
                      <small id="emailHelpId" class="form-text text-muted">Help text</small>
                    </div>
                    
                    <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block" >Submit</button>
                </form>
            </div>
          </div>
          <hr />
        </div> 
        
      </main>
     </Aux> 
    )
}

export default PartnerSignUp;
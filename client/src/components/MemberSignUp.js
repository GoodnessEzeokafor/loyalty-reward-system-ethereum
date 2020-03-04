import React from 'react';
import Nav from "./Nav"
import Aux from "../hoc/aux"
const MemberSignUp = () => {
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
                <form>
                    <div class="form-group">
                      <label for="">First Name</label>
                      <input type="text"
                        class="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter First Name" />
                      <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                    <div class="form-group">
                      <label for="">Last Name</label>
                      <input type="text"
                        class="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter Last Name" />
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

export default MemberSignUp;
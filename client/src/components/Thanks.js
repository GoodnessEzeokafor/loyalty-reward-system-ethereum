import React, { Component } from 'react'

import { Link } from "react-router-dom"
import Aux from "../hoc/aux"

const Thank = () => {

        return(
          <Aux>
          <section class="flex-container thanks">
          <h1>THANK YOU!</h1>
          <i class="fa fa-check main-content__checkmark" id="checkmark"></i>
          <Link to="/">Continue to Home</Link>
        </section>
        </Aux>
        )
}

export default Thank;
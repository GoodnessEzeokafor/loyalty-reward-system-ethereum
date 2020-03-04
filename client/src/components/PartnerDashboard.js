
import React, { useState } from 'react';
import { withRouter } from "react-router";


 const PartnerDashboard = (props) => {
    
    const { match: { params } } = props;
  
    // getPartner()
    // const [partners, setPartners] = useState([]);
    // setPartners([
    //     ...partners,
    //     await props.loyaltyDapp.methods.getPartner(parseInt(params.id, 10)).call()
    // ])
    // console.log(params.id)
    // const partner = await props.loyaltyDapp.methods.partners(parseInt(params.id, 10)).call() 
    // for(var i=0; i <= 4;i++){
    //     var partner = await props.loyaltyDapp.methods.partners(parseInt(params.id, 10)).call()
    //     console.log(partner)
    // }
    // partner = []
    return(
    <h3></h3>
    )
}

export default withRouter(PartnerDashboard)
import React from 'react'
import '../Styles/Faqs.css'
import logobutton from '../Images/cultdaologo.svg'
import logo from '../Images/logo.svg'
import CustomTab from './CustomTab'

const ConnectWallet = () => {
  return (
    <div>
    <div className="container">
     <div className="row">
        <div className="col-lg-12 col-sm-12" >
         <div className="Header">
            <div className="button1" style={{display:"flex" ,justifyContent:"space-between"}}>
            <a style={{background:"#2E2F5F", borderRadius:"3rem"}} href="#" class="button_Wallet">CULTT.DAO</a>
            
            <div className="logo">
            <img src={logo} alt="" />
            </div>
            <div className="button2">
            <a style={{background:"#2E2F5F", borderRadius:"3rem"}} href="#" class="button_Wallet">CONNECT WALLET</a>
            </div>
            </div>
         </div>
        </div>
     </div>
     <hr style={{color:"white"}} /> 
 
    </div>
    <div className="col-lg-12 col-sm-12">
<CustomTab/>
    </div>
   
      
    </div>
    
  )
}

export default ConnectWallet

import React from 'react'
import '../Styles/Faqs.css'
import NavbarHeader from '../Components/NavbarHeader'
import ConnectWallet from '../Components/ConnectWallet'
import SocialMedia from '../Components/SocialMedia'

const Faqs = () => {
  return (
    <div>
      <div className="mainbgf">
     
     <div className="MainBoxFaqs" style={{paddingTop:"3rem"}}>
     <div className="container">
        <div className="row">
            <div className="col-lg-12 col-sm-12">
        
            <ConnectWallet /  >
           
            </div>
        </div>
     </div>
</div>
 <SocialMedia/>
      </div>
     
    </div>
  )
}

export default Faqs

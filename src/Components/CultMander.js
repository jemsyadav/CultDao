import React from 'react'
import SocialMedia from './SocialMedia'
import logo from '../Images/logo.svg'

const CultMander = () => {
  return (
    <div>
        <div className="mainbgf">
      
     
      <div className="MainBoxFaqs" style={{paddingTop:"3rem"}}>
     
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
             <div className="container">
         <div className="row" style={{marginBottom:"2rem"}}>
             <div className="col-lg-3 col-sm-12" style={{textAlign:"center",paddingTop:"4rem"}}>
             <div className="MainBox_CultDao" style={{color:"white",border:"1px solid white",display:"inline-block",padding:"2px 50px",textAlign:"center",borderRadius:"10px",background:"#2D2E5D"}}>
                <div className="first_Box_Paragraph">
                 <p style={{fontSize:"13px",margin:"0",paddingTop:"13px"}}>RVLT Price</p>
                 <p>$0.0000000556</p>
                 </div>
                 </div>
                 <div className="MainBox_CultDao" style={{color:"white",border:"1px solid white",display:"inline-block",padding:"2px 50px",textAlign:"center",borderRadius:"10px",background:"#2D2E5D",marginTop:"4rem"}}>
                <div className="first_Box_Paragraph">
                 <p style={{fontSize:"13px",margin:"0",paddingTop:"13px"}}>CHECK</p>
                 <p>CULT mander</p>
                 </div>
                 </div>
                 
 
             </div>
             <div className="col-lg-6 col-sm-12" style={{textAlign:"center",paddingTop:"3rem",paddingBottom:"8rem"}}>
             <div className="MainBox_Claim_Reward" style={{    border: "1px solid white",
     display: "inline-block",
     padding: "10px 30px",
     margintop: "10px",
     textalign: "center",
     borderradius: "16px",
     background:"#2D2E5D"
 }}>
 <p style={{color:"white"}}>Submit the transaction below to opt-in <br /> 
to the CULTmander pool. <br /><br />

Note: it is required to have $250 RVLT staked <br />
at the time of opting in. Unstaking <br />
any amount will remove you from the pool.</p>
<button style={{background:"#5255FD" ,width:"11rem",borderradius:"11rem !important"}} type="submit" class="btn btn-primary">Widthdraw</button>
<p style={{color:"white"}}>OPTmander
</p> 
<p style={{color:"white"}}>YES</p>
 </div>
 
             </div>
             <div className="col-lg-3 col-sm-12" style={{textAlign:"center",paddingTop:"4rem"}}>
             <div className="MainBox_CultDao" style={{color:"white",border:"1px solid white",display:"inline-block",padding:"2px 50px",textAlign:"center",borderRadius:"10px",background:"#2D2E5D"}}>
                <div className="first_Box_Paragraph">
                 <p style={{fontSize:"13px",margin:"0",paddingTop:"13px"}}>APR</p>
                 <p>6.31%</p>
                 </div>
                 </div>
                 <div className="MainBox_CultDao" style={{color:"white",border:"1px solid white",display:"inline-block",padding:"2px 50px",textAlign:"center",borderRadius:"10px",background:"#2D2E5D",marginTop:"4rem",marginBottom:"3rem"}}>
                <div className="first_Box_Paragraph">
                 <p style={{fontSize:"13px",margin:"0",paddingTop:"13px"}}>Total RVLT Staked</p>
                 <p>$0.00000738</p>
                 </div>
                 </div>
                 
 
             </div>
         </div>
        
       </div>
            
             </div>
         
  <SocialMedia/>
       </div>
    </div>
  )
}

export default CultMander

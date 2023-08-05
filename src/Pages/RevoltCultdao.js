import React from 'react'
import logo from '../Images/logo.svg'
import ConnectWallet from '../Components/ConnectWallet'
import SocialMedia from '../Components/SocialMedia'
import revoltcultdao from '../Images/revoultcultdao.svg'

const RevoltCultdao = () => {
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
                <p style={{fontSize:"13px",margin:"0",paddingTop:"13px"}}>CULT DAO</p>
                <p>$0.00000738</p>
                </div>
                </div>
                <div className="MainBox_CultDao" style={{color:"white",border:"1px solid white",display:"inline-block",padding:"2px 50px",textAlign:"center",borderRadius:"10px",background:"#2D2E5D",marginTop:"4rem"}}>
               <div className="first_Box_Paragraph">
                <p style={{fontSize:"13px",margin:"0",paddingTop:"13px"}}>CULT DAO</p>
                <p>$0.00000738</p>
                </div>
                </div>
                

            </div>
            <div className="col-lg-6 col-sm-12" style={{textAlign:"center" ,}}>
            <div className="MainBox_Claim_Reward" >

       <div className="Image_Logo">
<img src={revoltcultdao} alt="" style={{paddingTop:"2rem"}} />

       </div>
       <div className="MainBox_CultDao" style={{color:"white",border:"1px solid white",display:"inline-block",padding:"2px 50px",textAlign:"center",borderRadius:"10px",background:"#2D2E5D",marginTop:"4rem"}}>
               <div className="first_Box_Paragraph">
                <p style={{fontSize:"13px",margin:"0",paddingTop:"13px"}}>CULT Bought and Burned</p>
                <p>COMMING SOON</p>
                </div>
                </div>
</div>

            </div>
            <div className="col-lg-3 col-sm-12" style={{textAlign:"center",paddingTop:"4rem"}}>
            <div className="MainBox_CultDao" style={{color:"white",border:"1px solid white",display:"inline-block",padding:"2px 50px",textAlign:"center",borderRadius:"10px",background:"#2D2E5D"}}>
               <div className="first_Box_Paragraph">
                <p style={{fontSize:"13px",margin:"0",paddingTop:"13px"}}>CULT DAO</p>
                <p>$0.00000738</p>
                </div>
                </div>
                <div className="MainBox_CultDao" style={{color:"white",border:"1px solid white",display:"inline-block",padding:"2px 50px",textAlign:"center",borderRadius:"10px",background:"#2D2E5D",marginTop:"4rem",marginBottom:"3rem"}}>
               <div className="first_Box_Paragraph">
                <p style={{fontSize:"13px",margin:"0",paddingTop:"13px"}}>CULT DAO</p>
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

export default RevoltCultdao

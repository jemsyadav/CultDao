import React from 'react'
import SocialMedia from './SocialMedia'
import logo from '../Images/logo.svg'


const StakeRvlt = () => {
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
            <div className="col-lg-6 col-sm-12" style={{textAlign:"center"}}>
            <div className="MainBox_Claim_Reward" style={{    border: "1px solid white",
    display: "inline-block",
    padding: "10px 30px",
    margintop: "10px",
    textalign: "center",
    borderradius: "16px",
    background:"#2D2E5D"
}}>

            <form style={{marginTop:"4rem"}}>
  <div class="form-group">
  <div className="Balance_Input" style={{textAlign:""}}>
  <div className="balance_Zer0" style={{display:"flex" ,justifyContent:"space-between"}}>
  <div className="balance">
    <label style={{color:"white"}} for="exampleInputEmail1">Balance:</label>
    </div>
    <div className="Zero">
     <p style={{color:"white"}}> 0</p>
    </div>
    </div>
    <input style={{width:"21rem",background:"#43446F"}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
   
    </div>
   <div className="button" style={{paddingTop:"11px",textAlign:""}}>
   <button style={{background:"#5255FD" ,width:"11rem",borderradius:"11rem !important"}} type="submit" class="btn btn-primary">Approve</button>
   </div>
  </div>
  <div class="form-group">
  <div className="Balance_Input" style={{textAlign:""}}>
  <div className="balance_Zer0" style={{display:"flex" ,justifyContent:"space-between"}}>
  <div className="balance">
    <label style={{color:"white"}} for="exampleInputEmail1">uRVLT Balance:</label>
    </div>
    <div className="Zero">
     <p style={{color:"white"}}> 0</p>
    </div>
    </div>
    <input style={{width:"21rem",background:"#43446F"}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
    </div>
   <div className="button" style={{paddingTop:"11px",textAlign:""}}>
   <button style={{background:"#5255FD" ,width:"11rem",borderradius:"11rem !important"}} type="submit" class="btn btn-primary">Widthdraw</button>
   </div>
  </div>
  <label style={{color:"white" ,display:"flex"}} for="exampleInputEmail1">Cycle -1 RVLT::</label>
  
  <div className="button" style={{paddingTop:"11px",textAlign:"",margin:'0'}}>
   <button style={{background:"#5255FD" ,width:"11rem",borderradius:"11rem !important"}} type="submit" class="btn btn-primary">Claim Out</button>
   </div>
 
  
</form>
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

export default StakeRvlt

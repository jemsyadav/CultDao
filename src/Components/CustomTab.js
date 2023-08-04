import React from 'react'
import Stake_Cult from './Stake_Cult'
import Proposals from './Proposals'
import '../Styles/Navbar.css'

const CustomTab = () => {
  return (
    <div>
     <div className="custom_tab">
       
       <ul
         style={{ gap: "39px",borderRadius:'12px', border:"none" ,display:"flex",justifyContent:"center",paddingBottom:"3rem"}}
         class=" NavHeading nav nav-tabs"
         id="myTab"
         role="tablist"   
        
       >
         <li class="nav-item" role="presentation">
           <button
             class="nav-link active"
             id="home-tab"
             data-bs-toggle="tab"
             data-bs-target="#home-tab-pane"
             type="button"
             role="tab"
             aria-controls="home-tab-pane"
             aria-selected="true"
             style={{background:"#2E2F5F"}}
            
           >
         <h6 style={{color:"white"}}>STAKE CULT</h6>
           </button>
         </li>
         <li class="nav-item" role="presentation">
           <button
            style={{background:"#2E2F5F"}}
             class="nav-link"
             id="profile-tab"
             data-bs-toggle="tab"
             data-bs-target="#profile-tab-pane"
             type="button"
             role="tab"
             aria-controls="profile-tab-pane"
             aria-selected="false"
           >
      <h6 style={{color:"white"}}>PROPOSALS</h6>
           </button>
         </li>
        
       </ul>
       <div class="tab-content" id="myTabContent">
         <div
           class="tab-pane fade show active"
           id="home-tab-pane"
           role="tabpanel"
           aria-labelledby="home-tab"
           tabindex="0"
         >
        
          <Stake_Cult/>
         </div>
         <div
           class="tab-pane fade"
           id="profile-tab-pane"
           role="tabpanel"
           aria-labelledby="profile-tab"
           tabindex="0"
         >
        <Proposals/>
          
         </div>
         <div
           class="tab-pane fade"
           id="contact-tab-pane"
           role="tabpanel"
           aria-labelledby="contact-tab"
           tabindex="0"
         >
           {" "}
             <p style={{color:"white"}}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est id suscipit corrupti molestias? Voluptates rem nobis amet alias iste officia excepturi enim fuga dignissimos minus deleniti pariatur incidunt debitis sint temporibus ad nostrum, vitae consequatur maiores explicabo molestiae? Officia facilis, suscipit nulla provident itaque vitae omnis aliquid beatae veniam, voluptate laudantium, unde aspernatur cumque. Placeat harum assumenda itaque ipsam! Rem reprehenderit quaerat distinctio optio iusto, blanditiis laboriosam harum ad neque numquam sit tempore corrupti illo, adipisci at, soluta inventore et repellat architecto nesciunt delectus culpa. Odio dolorum maxime fuga, eligendi enim odit natus dolorem accusamus molestias reiciendis! Odio, reprehenderit!</p>
           {/* <Play /> */}
         </div>
       </div>
     </div>
    </div>
  )
}

export default CustomTab

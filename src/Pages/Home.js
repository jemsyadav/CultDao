import React, { useState ,useEffect} from 'react'
import sdrone from '../Images/sdrone.svg'
import sdrtwo from '../Images/sdrtwo.svg'
import thirdimage from '../Images/Thirdimage.svg'

import Navbar1 from '../Components/NavbarHeader'
import '../Styles/Home.css'

import Carousel from 'react-bootstrap/Carousel';
 
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import SocialMedia from '../Components/SocialMedia'


const Home = () => {
//   useEffect(() => {
//     AOS.init();
//   }, [])
// const [text,setText]=useState(false)
// const handleTextOpen=()=>{
//   setText(true)
// }
// const handleTextClose=()=>{
//   setText(false)
// }


  return (
    <>
   

    <div  className='mainbg' style={{position:"relative"}}>
   <div style={{backgroundColor:'transparent'}}>
   <Navbar1/>
   </div>
    <Carousel>
      <Carousel.Item>
       <div style={{textAlign:'center'}}>
       <img style={{paddingTop:"2rem"}} src={sdrone} />
       </div>
       <h3 style={{color:"white"}}>FULL DISTRIBUTION</h3>
          <p style={{color:"white"}}>When investee protocols tokens vest, having  <br />dCULT allows users to claim the rewards that <br />are sent to the DAO</p>
        
      </Carousel.Item>
      <Carousel.Item>
      <div style={{textAlign:'center'}}>
      <img style={{paddingTop:"2rem"}} src={sdrtwo} />
      </div>
      <h3 style={{color:"white"}}>FIGHT AGAINST CENTRALIZATION</h3>
          <p style={{color:"white"}}>
          We give funding to those who are ready to  <br />
break the chains and have an idea that can change the world.
          </p>
       
      </Carousel.Item>
      <Carousel.Item>
      <div style={{textAlign:'center'}}>
      <img style={{paddingTop:"2rem"}} src={thirdimage} />
      </div>
      <h3 style={{color:"white"}}>FIGHT AGAINST CENTRALIZATION</h3>
          <p style={{color:"white"}}>
          We give funding to those who are ready to  <br />
           break the chains and have an idea that can change the world.
          </p>
      </Carousel.Item>
    
    </Carousel>
    <SocialMedia/>
    </div>
  
    
    </>
  )
}

export default Home

import React from 'react'
import logo1 from '../Images/Social_Media_1.svg'
import '../Styles/Navbar.css'

const SocialMedia = () => {
  return (
    <div>
      <div className="Main_Box_Social_Media" style={{color:"white",display:"flex",justifyContent:"space-between",alignItems:'center', padding:"10px 30px",margin:"0px 17px -3px ",textAlign:"center",borderBottomLeftRadius:"50px",borderBottomRightRadius:'50px',border:"1px solid black" ,background:"#363770",flexWrap:"wrap"}}>
        <div className="First_Content">
            <p>BUY CULT NOW ON UNISWAP</p>
        </div>
        <div className="Logo_Image" style={{display:"flex",gap:"1rem"}}>
            <div className="firsrtImage">
             <a   href=""> <img className='Hover_effect' src={logo1} alt="" /></a>
            </div>
            <div   className="firstImage">
            <a   href=""> <img className='Hover_effect' src={logo1} alt="" /></a>
            </div>
            <div className="firstImage">
            <a  href=""> <img className='Hover_effect' src={logo1} alt="" /></a>
            </div>
            <div className="firstImage">
            <a  href=""> <img className='Hover_effect' src={logo1} alt="" /></a>
            </div>
          
        </div>
        <div className="First_Content">
            <p>BUY CULT NOW ON UNISWAP</p>
        </div>
      </div>

    </div>
  )
}

export default SocialMedia

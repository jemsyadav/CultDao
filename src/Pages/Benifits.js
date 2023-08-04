import React,{useEffect} from "react";
import Navbar1 from '../Components/Header'

import AOS from 'aos';
import 'aos/dist/aos.css';


const Benifits = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div style={{overflow:'hidden'}}>
    <Navbar1/>







    </div>
  )
}

export default Benifits

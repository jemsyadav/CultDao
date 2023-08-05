
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import Navbar1 from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Benifits from './Pages/Benifits';
import OurTeam from './Pages/OurTeam';
import Faqs from './Pages/Faqs';
import RevoltCultdao from './Pages/RevoltCultdao';
import StakeRvlt from './Components/StakeRvlt';
import CultMander from './Components/CultMander';
import CultMandersNft from './Components/CultMandersNft';

function App() {
  return (
   <div>


  <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Home/>}/>
   
    <Route path='/faqs' element={<Faqs/>}/>
    <Route path='/revoltcultdao' element={<RevoltCultdao/>}/>
    <Route path='/stakervlt' element={<StakeRvlt/>}/>
    <Route path='/cultmander' element={<CultMander/>}/>
    <Route path='/cultmandernft' element={<CultMandersNft/>}/>
    

     

    </Routes>
  </BrowserRouter>


    </div>
  );
}

export default App;

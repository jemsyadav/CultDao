
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import Navbar1 from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Benifits from './Pages/Benifits';
import OurTeam from './Pages/OurTeam';
import Faqs from './Pages/Faqs';

function App() {
  return (
   <div>


  <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/faqs' element={<Faqs/>}/>
     

    </Routes>
  </BrowserRouter>


    </div>
  );
}

export default App;

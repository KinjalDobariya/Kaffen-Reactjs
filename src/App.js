import './App.css';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Home from './componant/Home';
import Restaurant from './componant/Restaurant';
import Mainabout from './componant/Mainabout';
import Menucoffee from './componant/Menucoffee';



function App() {

  return (
    <>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        <Route path="/About" element={<Mainabout />} />
        <Route path="/Menucoffee" element={<Menucoffee />} />
        
      </Routes>

    </>


  );
}

export default App;

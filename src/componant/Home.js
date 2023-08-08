import '../App.css';

import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Topheader from './Topheader';
import Slider from './Slider';
import About from './About';
import Services from './Services';
import Menubar from './Menubar';
import Choose from './Choose';
import Slider2 from './Slider2';
import Testimonial from './Testimonial';
import Count from './Count';
import Latest from './Latest';
import Parallax from './Parallax';
import Footer from './Footer';


function Home() {

  return (
    <>
      <Topheader/>
      <Header/>
      <Slider/>
      <About/>
      <Services/>
      <Menubar/>
      <Choose/>
      <Slider2/>
      <Testimonial/>
      <Count/>
      <Latest/>
      <Parallax/>
      <Footer/>



    </>
    
      
  );
}

export default Home;

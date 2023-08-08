
import '../style.css';

// bootstrap file
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Topheader from './Topheader';
import Mabout from './Mabout';
import Mchoose from './Mchoose';
import Rnumber from './Rnumber';
import Mvideo from './Mvideo';
import Mfood from './Mfood';
import Mteam from './Mteam';
import Rbrand from './Rbrand';
import Testimonial from './Testimonial';
import Parallax from './Parallax';
import Footer from './Footer';




function Mainabout() {

    return (
        <>
            <Topheader />
            <Header />
            <Mabout/>
            <Mchoose/>
            <Rnumber />
            <Mvideo/>
            <Mfood/>
            <Mteam/>
            <Rbrand/>
            <Testimonial />
            <Parallax />
            <Footer/>

            



        </>
    );
}

export default Mainabout;
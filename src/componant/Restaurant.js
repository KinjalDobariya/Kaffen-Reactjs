import '../style.css';

// bootstrap file
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Topheader from './Topheader';
import Rslider from './Rslider';
import Category from './Category';
import Rmenu from './Rmenu';
import Rteam from './Rteam';
import Form from './Form';
import Rabout from './Rabout';
import Testimonial from './Testimonial';
import Rvideo from './Rvideo';
import Rnumber from './Rnumber';
import Parallax from './Parallax';
import Latest from './Latest';
import Instaslider from './Instaslider';
import Rbrand from './Rbrand';
import Footer from './Footer';



function Restaurant() {

    return (
        <>
            <Topheader />
            <Header />
            <Rslider />
            <Category />
            <Rmenu />
            <Rteam />
            <Form />
            <Rabout />
            <Testimonial />
            <Rvideo />
            <Rnumber />
            <Parallax />
            <Latest />
            <Instaslider/>
            <Rbrand/>
            <Footer/>





        </>
    );
}



export default Restaurant;
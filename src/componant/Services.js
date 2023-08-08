
import '../style.css';

// bootstrap file
import 'bootstrap/dist/css/bootstrap.min.css';
import {ImSpoonKnife} from "react-icons/im";
import { BiCoffee} from "react-icons/bi";
import { FaGlassCheers } from "react-icons/fa";

function Services() {
    return (

        <>
            <section className="section kf-services section-bg">
                <div className="container">
                    <div className="kf-services-items row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                            <div className="kf-services-item">
                                <div className="image kf-image-hover">
                                    <a href="index.htmll">
                                        <img src={require('../image/asset 3.jpeg')} alt="" className='img-fluid'></img>
                                    </a>
                                </div>
                                <div className="desc">
                                    <div className="icon"><ImSpoonKnife></ImSpoonKnife></div>
                                    <h5 class="name">Restaurant Menu</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                            <div className="kf-services-item">
                                <div className="image kf-image-hover">
                                    <a href="index.html">
                                        <img src={require('../image/asset 4.jpeg')} alt="" className='img-fluid'></img>
                                    </a>
                                </div>
                                <div className="desc">
                                    <div className="icon"><BiCoffee></BiCoffee></div>
                                    <h5 className="name">Coffee Menu</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                            <div className="kf-services-item">
                                <div className="image kf-image-hover">
                                    <a href="index.html">
                                        <img src={require('../image/asset 5.jpeg')} alt="" className='img-fluid'></img>
                                    </a>
                                </div>
                                <div class="desc">
                                    <div className="icon"><FaGlassCheers></FaGlassCheers></div>
                                    <h5 className="name">Food Services</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Services;
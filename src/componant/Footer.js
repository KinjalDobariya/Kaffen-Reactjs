

import '../style.css';

// bootstrap file
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineLocationOn } from "react-icons/md";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

function Footer() {


    return (

        <>

            <footer className="kf-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="kf-logo">
                                <a href="index.html">
                                    <img src={require("../image/asset 0.png")} alt="" className='img-fluid' />
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="kf-f-hours">
                                <h5>Working Hours</h5>
                                <ul className='footer-menu'>
                                    <li>
                                        Sunday - Thursday
                                        <em>08:00 am - 09:00pm</em>
                                    </li>
                                    <li>
                                        Only Friday
                                        <em>03:00 pm - 09:00pm</em>
                                    </li>
                                    <div>
                                        <strong>Saturday Close</strong>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="kf-f-contact">
                                <h5>Contact Us</h5>
                                <ul>
                                    <li>
                                        <MdOutlineLocationOn className='f-icon'></MdOutlineLocationOn>
                                        <em>Location :</em>
                                        55 Main Street, New York
                                    </li>
                                    <li>
                                        <FaEnvelopeOpenText className='f-icon2'></FaEnvelopeOpenText>
                                        <em>Email Address :</em>
                                        kaffendev@gmail.com
                                    </li>
                                    <li>
                                        <BsTelephone className='f-icon2'></BsTelephone>
                                        <em>Phone Number :</em>
                                        +012 (345) 678 99
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="kf-f-gallery">
                                <h5>Gallery</h5>
                                <ul className='g-menu'>
                                    <li>
                                        <a href="index.html" className="kf-image-hover"><img src={require('../image/asset 17.jpeg')} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="index.html" className="kf-image-hover"><img src={require('../image/asset 18.jpeg')} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="index.html" className="kf-image-hover"><img src={require('../image/asset 16.jpeg')} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="index.html" className="kf-image-hover"><img src={require('../image/asset 23.jpeg')} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="index.html" className="kf-image-hover"><img src={require('../image/asset 9.jpeg')} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="index.html" className="kf-image-hover"><img src={require('../image/asset 7.jpeg')} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">

                            <div className="kf-copyright">
                                Copyright © 2022 Kaffen. All Rights Reserved.
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
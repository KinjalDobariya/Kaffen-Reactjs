
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";


function Mteam() {

    return (    

        <>

            <section className="section kf-team kf-section-transparent " style={{background:"#090c0f"}}>
                <div className="container">

                    <div className="kf-titles text-center">
                        <div className="kf-subtitle">
                            Experience Team Member
                        </div>
                        <h3 className="kf-title">
                            Meet Our Professional Chefs
                        </h3>
                    </div>

                    <div className="kf-team-items row">

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 my-lg-0 my-md-3 my-sm-3 my-xs-3">
                            <div className="kf-team-item">
                                <div className="desc-team">
                                    <h5 className="name-team">Anthony J. Bowman</h5>
                                    <div className="subname">Senior Chefs</div>
                                </div>
                                <div className="image-team">
                                    <img src={require('../image/r42.jpeg')} alt="" />
                                    <div className="info-team">
                                        <div className="label">bowmankf@gmail.com</div>
                                        <div className="label">+012 (345) 678 99</div>
                                    </div>
                                    <div className="social">
                                        <a href="index.html"><FaFacebookF className='social_icon'></FaFacebookF></a>
                                        <a href="index.html"><FaTwitter className='social_icon'></FaTwitter></a>
                                        <a href="index.html"><FaLinkedin className='social_icon'></FaLinkedin></a>
                                        <a href="index.html"><FaYoutube className='social_icon1'></FaYoutube></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 my-lg-0 my-md-3 my-sm-3 my-xs-4">
                            <div className="kf-team-item">
                                <div className="desc-team">
                                    <h5 className="name-team">Kenny V. Gonzalez</h5>
                                    <div className="subname">Senior Chefs</div>
                                </div>
                                <div className="image-team ">
                                    <img src={require('../image/r43.jpeg')} alt="" />
                                    <div className="info-team">
                                        <div className="label">gonzalezkf@gmail.com</div>
                                        <div className="label">+012 (345) 678 99</div>
                                    </div>
                                    <div className="social">
                                    <a href="index.html"><FaFacebookF className='social_icon'></FaFacebookF></a>
                                        <a href="index.html"><FaTwitter className='social_icon'></FaTwitter></a>
                                        <a href="index.html"><FaLinkedin className='social_icon'></FaLinkedin></a>
                                        <a href="index.html"><FaYoutube className='social_icon1'></FaYoutube></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 my-lg-0 my-md-3 my-sm-3 my-xs-4">
                            <div className="kf-team-item">
                                <div className="desc-team">
                                    <h5 className="name-team">Joseph M. Lawrence</h5>
                                    <div className="subname">Senior Chefs</div>
                                </div>
                                <div className="image-team ">
                                    <img src={require('../image/r44.jpeg')} alt="" />
                                    <div className="info-team">
                                        <div className="label">lawrencekf@gmail.com</div>
                                        <div className="label">+012 (345) 678 99</div>
                                    </div>
                                    <div className="social">
                                    <a href="index.html"><FaFacebookF className='social_icon'></FaFacebookF></a>
                                        <a href="index.html"><FaTwitter className='social_icon'></FaTwitter></a>
                                        <a href="index.html"><FaLinkedin className='social_icon'></FaLinkedin></a>
                                        <a href="index.html"><FaYoutube className='social_icon1'></FaYoutube></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 my-lg-0 my-md-3 my-sm-3 my-xs-4">
                            <div className="kf-team-item">
                                <div className="desc-team">
                                    <h5 className="name-team">Charles K. Smith</h5>
                                    <div className="subname">Senior Chefs</div>
                                </div>
                                <div className="image-team ">
                                    <img src={require('../image/r45.jpeg')} alt="" />
                                    <div className="info-team">
                                        <div className="label">smithkf@gmail.com</div>
                                        <div className="label">+012 (345) 678 99</div>
                                    </div>
                                    <div className="social">
                                    <a href="index.html"><FaFacebookF className='social_icon'></FaFacebookF></a>
                                        <a href="index.html"><FaTwitter className='social_icon'></FaTwitter></a>
                                        <a href="index.html"><FaLinkedin className='social_icon'></FaLinkedin></a>
                                        <a href="index.html"><FaYoutube className='social_icon1'></FaYoutube></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </>


    );


}


export default Mteam;
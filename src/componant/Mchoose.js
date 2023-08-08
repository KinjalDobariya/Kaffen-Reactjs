
import '../style.css';

// bootstrap file
import 'bootstrap/dist/css/bootstrap.min.css';

import { RxCaretRight } from "react-icons/rx";

function Mchoose() {

    return (
        <>

            <section className="section kf-choose section-choose">
                <div className="container">
                    <div className="row">

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 margin-right align-self-center">

                            <div className="kf-titles">
                                <div class="kf-subtitle">
                                    About Kaffen
                                </div>
                                <h3 class="kf-title">
                                    New London Coffee Founded For Extraordinary Test
                                </h3>
                            </div>
                            <div className="kf-text">
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque
                                    laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis
                                </p>
                            </div>
                            <div className="kf-choose-list">
                                <ul className='menu-choose'>
                                    <li className="element-anim-1 ">
                                        <div className="choose-icon">
                                            <img src={require('../image/asset 13.png')} alt="" className='img-fluid'></img>
                                        </div>
                                        <div className="desc-choose">
                                            <h5 className="choose-name">Natural Coffee Beans</h5>
                                            <div className="choose-subname">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</div>
                                        </div>
                                    </li>
                                    <li className="element-anim-1">
                                        <div className="choose-icon">
                                            <img src={require('../image/asset 14.png')} alt="" className='img-fluid'></img>
                                        </div>
                                        <div className="desc-choose">
                                            <h5 className="choose-name">100% ISO Certification</h5>
                                            <div className="choose-subname">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <a href="index.html" className="kf-btn">
                                <span>OUR MENU <RxCaretRight className='icon-kf'></RxCaretRight></span>

                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <div class="kf-choose-image">
                                <img src={require('../image/m2.jpeg')} alt="" className='img-fluid'></img>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default Mchoose;
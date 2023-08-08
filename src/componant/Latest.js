

import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaCalendarAlt } from "react-icons/fa";
import { RxCaretRight } from "react-icons/rx";







function Latest() {

    return (

        <>

            <section className="section kf-latest-blog section-bg">
                <div className="container">
                    <div className="kf-titles text-center">
                        <div className="kf-subtitle">
                            Get Every Single Update
                        </div>
                        <h3 className="kf-title">
                            Read Some Latest Blog & News
                        </h3>
                    </div>
                    <div className="kf-blog-grid-items row">

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                            <div className="kf-blog-grid-item">
                                <div className="image-latest">
                                    <a href="index.html">
                                        <img src={require("../image/asset 23.jpeg")} alt="" />
                                    </a>
                                </div>
                                <div className="desc-latest">
                                    <h5 className="name-latest">SWR React Hooks With Next Increm Ental Static Regeneration</h5>
                                    <div className="kf-date"><FaCalendarAlt className='l-icon'></FaCalendarAlt>25 Sep 2021</div>
                                    <div className="kf-comm">Comments (7)</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                            <div className="kf-blog-grid-item">
                                <div className="image-latest">
                                    <a href="blog-single.html">
                                        <img src={require("../image/asset 24.jpeg")} alt="" />
                                    </a>
                                </div>
                                <div className="desc-latest">
                                    <h5 className="name-latest">Decisions For Building Flexible Components DevTools Browser</h5>
                                    <div className="kf-date"><FaCalendarAlt className='l-icon'></FaCalendarAlt>25 Sep 2021</div>
                                    <div className="kf-comm">Comments (7)</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                            <div className="kf-blog-grid-item">
                                <div className="image-latest">
                                    <a href="blog-single.html">
                                        <img src={require("../image/asset 25.jpeg")} alt="" />
                                    </a>
                                </div>
                                <div className="desc-latest">
                                    <h5 className="name-latest">SWR React Hooks With Next Increm Ental Static Regeneration</h5>
                                    <div className="kf-date"><FaCalendarAlt className='l-icon'></FaCalendarAlt>25 Sep 2021</div>
                                    <div className="kf-comm">Comments (7)</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="blog-grid.html" className="kf-btn">
                                <span>view all <RxCaretRight className='icon_kf'></RxCaretRight></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );

}

export default Latest;
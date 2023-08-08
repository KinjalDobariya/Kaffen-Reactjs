import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RxCaretRight } from "react-icons/rx";

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



function Rslider() {

    return (
        <>
            < OwlCarousel className='owl-theme' items={1} loop nav dots={false} autoplayTimeout={4000} >
                <div class='item back r-back1'>
                    <div className="row">
                        <div className="col-lg-12 items">
                            <div className=" img-fluid">
                                <div className="contant">
                                    <div className='container'>
                                        <div className=" row description text-lg-left">
                                            <div className=" col-12 subtitles">
                                                Welcome to the Kaffen
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <h2 className="name">
                                                    Reserve Your <br></br>Table Today
                                                </h2>
                                            </div>
                                            <div className="kf-bts col-lg-12 col-md-12">
                                                <div className="row">
                                                    <div className="col-lg-auto col-md-4 col-sm-12">
                                                        <a href="menu-restaurant.html" class="kf-btn">
                                                            <span>explore more <RxCaretRight className='icon_kf'></RxCaretRight></span>

                                                        </a>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                                        <a href="index.html" class="dark-btn  ">
                                                            <span>get delivery <RxCaretRight className='icon_kf'></RxCaretRight> </span>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='item back r-back2'>
                    <div className="row">
                        <div className="col-lg-12 items">
                            <div className=" img-fluid">
                                <div className="contant">
                                    <div className='container'>
                                        <div className=" row description align-left">
                                            <div class=" col-12 subtitles">
                                                Welcome to the Kaffen
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <h2 className="name">
                                                    Explore The <br></br>Lobsters
                                                </h2>
                                            </div>
                                            <div className="kf-bts col-lg-12 col-md-12">
                                                <div className="row">
                                                    <div className="col-lg-auto col-md-4 col-sm-12">
                                                        <a href="index.html" class="kf-btn">
                                                            <span>explore more <RxCaretRight className='icon_kf'></RxCaretRight></span>

                                                        </a>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                                        <a href="index.html" className="dark-btn  ">
                                                            <span>get delivery <RxCaretRight className='icon_kf'></RxCaretRight> </span>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item back r-back3'>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className=" img-fluid">
                                <div className="contant">
                                    <div className='container'>
                                        <div className=" row description text-lg-left">
                                            <div class=" col-12 subtitles">
                                                Welcome to the Kaffen
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <h2 className="name text-anim-1">
                                                    Premium <br></br>Meat Kaffen
                                                </h2>
                                            </div>
                                            <div className="kf-bts col-lg-12 col-md-12">
                                                <div className="row">
                                                    <div className="col-lg-auto col-md-4 col-sm-12 margin_kf">
                                                        <a href="index.html" class="kf-btn">
                                                            <span>explore more <RxCaretRight className='icon_kf'></RxCaretRight></span>

                                                        </a>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                                        <a href="index.html" class="dark-btn  ">
                                                            <span>get delivery <RxCaretRight className='icon_kf'></RxCaretRight> </span>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </>
    );
}



export default Rslider;

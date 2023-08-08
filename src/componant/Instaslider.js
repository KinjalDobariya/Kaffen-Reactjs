


import '../style.css';

// bootstrap file
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { FaInstagram } from "react-icons/fa";


function Instaslider() {

    return (

        <>
            <section>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <OwlCarousel className='owl-theme' loop responsive={{ '1': { items: 1 }, '768': { items: 2 }, '992': { items: 2, stagePadding: 100, }, '1200': { items: 3, stagePadding: 190, } }} dots={false} autoplay autoplayTimeout={7000} >
                            <div className="swiper-slide">
                                <div className='slider_items'>
                                    <div className='slide-item-is'>
                                        <div className="image-is">
                                            <img src={require("../image/r20.jpeg")} alt=""></img>
                                        </div>
                                    </div>
                                    <div className="desc-slider-is">
                                        <a href="index.html" className="name-slider-is"><FaInstagram ></FaInstagram></a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className='slider_items'>
                                    <div className='slide-item-is'>
                                        <div className="image-is">
                                            <img src={require("../image/r21.jpeg")} alt=""></img>
                                        </div>
                                    </div>
                                    <div className="desc-slider-is">
                                        <a href="index.html" className="name-slider-is"><FaInstagram ></FaInstagram></a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className='slider_items'>
                                    <div className='slide-item-is'>
                                        <div className="image-is">
                                            <img src={require("../image/r22.jpeg")} alt=""></img>
                                        </div>
                                    </div>
                                    <div className="desc-slider-is">
                                        <a href="index.html" className="name-slider-is"><FaInstagram ></FaInstagram></a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className='slider_items'>
                                    <div className='slide-item-is'>
                                        <div className="image-is">
                                            <img src={require("../image/r23.jpeg")} alt=""></img>
                                        </div>
                                    </div>
                                    <div className="desc-slider-is">
                                        <a href="index.html" className="name-slider-is"><FaInstagram ></FaInstagram></a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className='slider_items'>
                                    <div className='slide-item-is'>
                                        <div className="image-is">
                                            <img src={require("../image/r24.jpeg")} alt=""></img>
                                        </div>
                                    </div>
                                    <div className="desc-slider-is">
                                        <a href="index.html" className="name-slider-is"><FaInstagram ></FaInstagram></a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className='slider_items'>
                                    <div className='slide-item-is'>
                                        <div className="image-is">
                                            <img src={require("../image/r40.jpeg")} alt=""></img>
                                        </div>
                                    </div>
                                    <div className="desc-slider-is">
                                        <a href="index.html" className="name-slider-is"><FaInstagram ></FaInstagram></a>
                                    </div>
                                </div>
                            </div>


                        </OwlCarousel>

                    </div>
                </div>
            </section>

        </>

    );

}


export default Instaslider;

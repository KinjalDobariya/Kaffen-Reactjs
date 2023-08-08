

import '../style.css';

// bootstrap file
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { FaStar } from "react-icons/fa";


function Testimonial() {

    return (

        <>

            <section className="section kf-testimonials kf-testimonials-2 section-bg">
                <div className="container">
                    <div className="kf-titles text-center">
                        <div className="kf-subtitle">
                            Customer Feedback
                        </div>
                        <h3 className="kf-title">
                            What Our Clients Say
                        </h3>
                    </div>
                    <OwlCarousel className='owl-theme' loop items={4} dots={true} responsive= {{'1':{items: 1},'768':{items:2},'992': {items: 4}}}>
                        <div className='padding-owl'>
                            <div className="slide-item-t text-cneter">
                                <div className="image-t">
                                    <img src={require('../image/asset 20.jpeg')} alt="" />
                                </div>
                                <div className="desc-t">
                                    <div className="stars-t">
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                    </div>
                                    <div className="text-t ">
                                        Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque laudantium
                                        totam remriam eaque quae abillo
                                    </div>
                                    <h5 className="name-t">Frederick S. France <em>Web Deigner</em></h5>
                                </div>
                            </div>
                        </div>
                        <div className='padding-owl'>
                            <div className="slide-item-t text-cneter">
                                <div className="image-t">
                                    <img src={require('../image/asset 22.jpeg')} alt="" />
                                </div>
                                <div className="desc-t">
                                    <div className="stars-t">
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                    </div>
                                    <div className="text-t ">
                                        Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque laudantium
                                        totam remriam eaque quae abillo
                                    </div>
                                    <h5 className="name-t">Frederick S. France <em>Web Deigner</em></h5>
                                </div>
                            </div>
                        </div>
                        <div className='padding-owl'>
                            <div className="slide-item-t text-cneter">
                                <div className="image-t">
                                    <img src={require('../image/asset 21.jpeg')} alt="" />
                                </div>
                                <div className="desc-t">
                                    <div className="stars-t">
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                    </div>
                                    <div className="text-t ">
                                        Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque laudantium
                                        totam remriam eaque quae abillo
                                    </div>
                                    <h5 className="name-t">Frederick S. France <em>Web Deigner</em></h5>
                                </div>
                            </div>
                        </div>
                        
                    </OwlCarousel>
                </div>
            </section>


        </>
    );
}

export default Testimonial;
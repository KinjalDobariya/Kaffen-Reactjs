
import '../style.css';

// bootstrap file
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



function Slider2() {

    return (

        <>
            <section className="section bg">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <OwlCarousel className='owl-theme owl-slider2' loop responsive= {{'1':{items: 1},'768':{items:2},'992':{items: 2, stagePadding: 100,},'1200': {items: 3,stagePadding: 190,}}} margin={30} center={true} dots={false}  autoplay autoplayTimeout={7000} >
                            <div className="swiper-slide">
                                <div className='slider_items'>
                                    <div className='slide-item'>
                                        <img src={require("../image/asset 15.jpeg")} alt=""></img>
                                    </div>
                                    <div className="desc-slider2">
                                        <h5 className="name-slider2">Latte</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide2">
                                <div className='slider_items'>
                                    <div className='slide-item'>
                                        <img src={require("../image/asset 16.jpeg")} alt=""></img>
                                    </div>
                                    <div className="desc-slider2">
                                        <h5 className="name-slider2">Cappuccino</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className='slider_items'>
                                    <div className='slide-item'>
                                        <img src={require("../image/asset 17.jpeg")} alt=""></img>
                                    </div>
                                    <div className="desc-slider2">
                                        <h5 className="name-slider2">Espresso</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide2">
                                <div className='slider_items'>
                                    <div className='slide-item'>
                                        <img src={require("../image/asset 18.jpeg")} alt=""></img>
                                    </div>
                                    <div className="desc-slider2">
                                        <h5 className="name-slider2">Black Coffee</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className='slider_items'>
                                    <div className='slide-item'>
                                        <img src={require("../image/asset 19.jpeg")} alt=""></img>
                                    </div>
                                    <div className="desc-slider2">
                                        <h5 className="name-slider2">Coffee</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide2">
                                <div className='slider_items'>
                                    <div className='slide-item'>
                                        <img src={require("../image/asset 8.jpeg")} alt=""></img>
                                    </div>
                                    <div className="desc-slider2">
                                        <h5 className="name-slider2">Iced Coffee</h5>
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


export default Slider2;
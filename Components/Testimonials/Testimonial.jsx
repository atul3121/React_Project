import React from "react";
import testimonialCSS from './../Testimonials/Testimonial.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Parallax } from "swiper/modules";

import img4 from './../../assets/fi1.png';
import img2 from './../../assets/fi2.png';
import img3 from './../../assets/fi3.png';

function Testimonial() {
    return (

        <div id="testimonials" className={`${testimonialCSS.testimonial_wrapper} section`}>
            <small className="section__Heading">Testimonials</small>
            <h2 className="section__Title">What Our Clients <span>Says</span></h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 1000,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                }}
                
                speed={1500}
                modules={[Autoplay]}
                className={testimonialCSS.swiper}
            >
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img4} alt="Shivam Raj" />
                        <div className={testimonialCSS.content}>
                            <h3>Manish Yadav <span>Customer</span></h3>
                            <p>Best place to stay. I stayed in this hotel, and my experience was awesome. The behaviour of the staff as well as the owner is very polite and humble.
                            I highly recommend "Hotel Pink" for your stay in Chakia</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img3} alt="Shivam Raj" />
                        <div className={testimonialCSS.content}>
                            <h3>Navneet Pandey <span>Customer</span></h3>
                            <p>Hygiene hotel in chakia, near harpur railway station, satisfied with hotel facility and services, most recommended hotel in chakia</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img2} alt="Shivam Raj" />
                        <div className={testimonialCSS.content}>
                            <h3>Ronit Raj<span>Customer</span></h3>
                            <p>Hotel Pink is Best choice hotel in chakia ,highly recommend for other customer for stay in chakia, best location near harpur railway station...</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Testimonial;

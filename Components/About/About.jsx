import React from 'react';
import aboutCSS from './../About/About.module.css'
import aboutImg from './../../assets/about-one.png'

function About(){
    return(
        <div className={`${aboutCSS.about_wrapper} sections`}>
            <div className={aboutCSS.about_img}>
                <img src={aboutImg} alt="about-img"/>
            </div>
            <div className={aboutCSS.about_content}>
                <small className="section__Heading">Hotel Pink</small>
                <h2 className="section__Title">Where Elegance Meet <span>Excellance</span></h2>
                <p>our vision is to create a welcoming and unforgettable experience for every guest. We believe in the perfect blend of traditional hospitality and modern luxury, ensuring that your stay with us is both comfortable and relaxing.</p>
                {/* <p>At Hotel Pink, we are committed to sustainability and community involvement. We strive to minimize our environmental impact through eco-friendly practices, and we actively support local charities and initiatives to give back to the community.</p> */}
                <p><h3>Visit  us today and experience the best of hospitality!</h3>

                We invite you to explore our hotel and experience the warmth and hospitality that defines Hotel Pink. Book your stay today and discover the perfect getaway!</p>
                <div className={aboutCSS.cards}>
                        <p>300+ <span>Awards Wins</span></p>
                        <p>500+ <span>Visitor visit</span></p>
                        <p>1000+ <span>Events</span></p>
                </div>
            </div>
        </div>
    )
}
export default About
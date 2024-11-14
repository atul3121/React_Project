import React from "react";
import footerCSS from './../Footer/Footer.module.css'

function Footer(){
    return(
        <footer className={`${footerCSS.footer_wrapper} sectionss`}>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.logo}>
                <h2>Hotel Pink</h2>
                <p>Stay once, carry memories forever,
Start here..   New Living,
See life from a different perspective,
your next space,
The perfect place for getaways!,
Space to live your life</p>
                </div>
            </div>
           
            <div className={footerCSS.FooterLinks}>
                <h3>Contact</h3>
                <p>Address: <span>Harpurnag Chakia </span></p>
                {/* <p>Email: shiavm@gmail.com </p> */}
                <p>phone: <span>91-9113739641</span></p>
            </div>
            <div className={footerCSS.FooterLinks}></div>
        </footer>
    )
}
export default Footer


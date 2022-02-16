import React from 'react'
import './footer.css'
import Facebook from '../../images/facebook.png'
import Instagram from '../../images/instagram.png'
import Youtube from '../../images/youtube.png'
import Twitter from '../../images/twitter.png'
import Light from '../../images/light-2.svg'
import Dots from '../../images/dots.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-header">
                <h3>join Cryptos newsletter to receive our discounts best deal</h3>
                <span>You can unsubscribe any time</span>
                {/* Subscribe Section */}
                <div className="subs-section">
                    <input type="text" name="" id="" placeholder="Your email address" />
                    <button type="submit">Subscribe</button>
                </div>
            </div>
            <div className="footer-navigation">
                {/* Footer Navigation Column */}
                <div className="fnav-item">
                    <h3>About US</h3>
                    <ul>
                        <li>How it works</li>
                        <li>Testimonial</li>
                        <li>Carars</li>
                        <li>Investors</li>
                        <li>Terms of Services</li>
                    </ul>
                </div>
                {/* Footer Navigation Column */}
                <div className="fnav-item">
                    <h3>Contact US</h3>
                    <ul>
                        <li>Contact</li>
                        <li>Support</li>
                        <li>Destinations</li>
                        <li>Sponsorship</li>
                    </ul>
                </div>
                {/* Footer Navigation Column */}
                <div className="fnav-item">
                    <h3>Videos</h3>
                    <ul>
                        <li>Submit Video</li>
                        <li>Ambassadors</li>
                        <li>Agency</li>
                        <li>Influencer</li>
                    </ul>
                </div>
                {/* Footer Navigation Column */}
                <div className="fnav-item">
                    <h3>Social Media</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Youtube</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
            {/* Footer Bottom Section */}
            <div className="footer-bottom">
                <h3>Cryptos</h3>
                <span>&copy;cryptos2021</span>
                <ul className="social-links">
                    <li><img src={Facebook} alt=""/></li>
                    <li><img src={Instagram} alt=""/></li>
                    <li><img src={Youtube} alt=""/></li>
                    <li><img src={Twitter} alt=""/></li>
                </ul>
            </div>

            {/* lights */}
            <img className='light footer-top-left' src={Light} alt="" />
            <img className='light footer-top-middle' src={Light} alt="" />
            <img className='light footer-bottom-left' src={Light} alt="" />
            <img className='light footer-bottom-right' src={Light} alt="" />
            {/* lights */}
            {/* Dots */}
            <img className='dots footer-bottom-left' src={Dots} alt="" />
            {/* Dots */}
        </div>
    )
}

export default Footer

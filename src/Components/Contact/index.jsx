import React from 'react'
import './contact.css'
import Light from '../../images/light-2.svg'
import Dots from '../../images/dots.svg'

function Contact() {
    return (
        <div className="contact">
            {/* Contact Header */}
            <div className="contact-header">
                <h1 className="main-header">Let's <span>Contact</span> With Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, porro corrupti. Adipisci ducimus illo culpa</p>
            </div>
            {/* Contact Main */}
            <div className="contact-main">
                {/* Name And Mail Seciton */}
                <div className="name-mail-section">
                    <input 
                        type="text" 
                        name="" 
                        id=""
                        placeholder="Your name here"
                    />
                    <div className="seperator"></div>
                    <input 
                        type="email" 
                        name="" 
                        id=""
                        placeholder="Your email address here"
                        
                    />
                </div>
                {/* Message Section */}
                <div className="message-section">
                    <textarea 
                        name="" 
                        id=""
                        placeholder="Your message here"
                    />
                </div>
                <button type="submit">send</button>
            </div>

            {/* lights */}
            <img className='light contact-top-left' src={Light} alt="" />
            <img className='light contact-bottom-right' src={Light} alt="" />
            {/* lights */}
            {/* Dots */}
            <img className='dots contact-top-left' src={Dots} alt="" />
            <img className='dots contact-bottom-right' src={Dots} alt="" />
            {/* Dots */}
        </div>
    )
}

export default Contact

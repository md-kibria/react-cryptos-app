import React from 'react'
import './about.css'
import aboutImg from '../../images/about-img.jpg'
import Light from '../../images/light-2.svg'
import Dots from '../../images/dots.svg'

function About() {
    return (
        <div className="about">
            {/* About Image Section */}
            <div className="about-img-section">
                {/* About Image  */}
                <div className="about-img">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
            {/* About Text Section */}
            <div className="about-text-section">
                {/* About Header */}
                <h1 className="main-header">Who We <span>Are?</span></h1>
                {/* About Text */}
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores aliquid perferendis aspernatur reiciendis, possimus quasi maxime quod harum earum nisi, facilis vitae iure fuga laudantium qui repellat eius dolore voluptates. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quod, fugit provident vero quasi perferendis exercitationem magni cum autem</p>
                {/* About button */}
                <button className="about-read-more-button">More</button>
            </div>

            {/* lights */}
            <img className='light about-top-middle' src={Light} alt="" />
            <img className='light about-bottom-right' src={Light} alt="" />
            <img className='light about-bottom-left' src={Light} alt="" />
            {/* lights */}
            {/* Dots */}
            <img className='dots about-top-left' src={Dots} alt="" />
            <img className='dots about-bottom-right' src={Dots} alt="" />
            {/* Dots */}
        </div>
    )
}

export default About

import React from 'react'
import './feedbacks.css'
import userCircle from '../../images/user_circle.png'
import Light from '../../images/light-2.svg'
import Dots from '../../images/dots.svg'

function Feedbacks() {
    return (
        <div className='feedbacks'>
            {/* Feedbacks Header */}
            <div className="feedback-header">
                <h1 className="main-header">Clients <span>Feedbacks</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, porro corrupti. Adipisci ducimus illo culpa, praesentium </p>
            </div>
            {/* Client Feedbacks */}
            <div className="feedback-items">
                {/* Feedback Item */}
                <div className="feedback-item">
                    {/* Client Info */}
                    <div className="client-info">
                        <div className="client-img">
                            <img src={userCircle} alt="" />
                        </div>
                        <div className="client-data">
                            <h4>John Doe</h4>
                            <span>CEO of something</span>
                        </div>
                    </div>
                    {/* Client Feedback */}
                    <div className="feedback-text">
                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Voluptate nostrum sequi veritatis ipsam numq uam quaerat officia.</p>
                    </div>
                </div>
                {/* Feedback Item */}
                <div className="feedback-item">
                    {/* Client Info */}
                    <div className="client-info">
                        <div className="client-img">
                            <img src={userCircle} alt="" />
                        </div>
                        <div className="client-data">
                            <h4>John Doe</h4>
                            <span>CEO of something</span>
                        </div>
                    </div>
                    {/* Client Feedback */}
                    <div className="feedback-text">
                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Voluptate nostrum sequi veritatis ipsam numq uam quaerat officia.</p>
                    </div>
                </div>
                {/* Feedback Item */}
                <div className="feedback-item">
                    {/* Client Info */}
                    <div className="client-info">
                        <div className="client-img">
                            <img src={userCircle} alt="" />
                        </div>
                        <div className="client-data">
                            <h4>John Doe</h4>
                            <span>CEO of something</span>
                        </div>
                    </div>
                    {/* Client Feedback */}
                    <div className="feedback-text">
                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Voluptate nostrum sequi veritatis ipsam numq uam quaerat officia.</p>
                    </div>
                </div>

                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                    <span className="left-indicator">‹</span>
                    <span className="right-indicator">›</span>
                </div>
            </div>

            {/* lights */}
            <img className='light feedback-top-right' src={Light} alt="" />
            <img className='light feedback-top-middle' src={Light} alt="" />
            <img className='light feedback-bottom-left' src={Light} alt="" />
            <img className='light feedback-bottom-right' src={Light} alt="" />
            {/* lights */}
            {/* Dots */}
            <img className='dots feedback-top-left' src={Dots} alt="" />
            <img className='dots feedback-bottom-right' src={Dots} alt="" />
            {/* Dots */}
        </div>
    )
}

export default Feedbacks

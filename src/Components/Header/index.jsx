import React from 'react'
import './header.css'
import headerOpts from '../../images/header-opts.svg'
import headerImg from '../../images/header-img.png'
import infoSquare from '../../images/info_square.png'
import infocircle from '../../images/info_circle.png'
import Light from '../../images/light.svg'
import Dots from '../../images/dots.svg'
import Navigaotn from '../Navigation'

function Header() {
    return (
        <div className="header">
            <Navigaotn />
            <div className="header-body">
                <div className="header-text">
                    {/* Header Title Text */}
                    <h1 className='main-header'>The World's Fasts</h1>
                    <h1 className='main-header'>Growing <span>Cryptos</span> Web App</h1>

                    <ul className="header-opts">
                        <li>
                            <img src={headerOpts} alt="" />
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit reiciendis labor</span>
                        </li>
                        <li>
                            <img src={headerOpts} alt="" />
                            <span>Maiores reprehenderit quaerat praesentium perspiciatis nemo?</span>
                        </li>
                        <li>
                            <img src={headerOpts} alt="" />
                            <span>Recusandae labore molestiae aspernatur temporibus reprehenderit lorem </span>
                        </li>
                    </ul>
                </div>
                <div className="header-img">
                    {/* Header Pops */}

                    {/* top-left */}
                    <div className="header-pop top-left">
                        <div>
                            <img src={infoSquare} alt="" />
                            <span>Lorem</span>
                        </div>
                    </div>

                    {/* top-right */}
                    <div className="header-pop top-right">
                        <div>
                            <img src={infoSquare} alt="" />
                            <span>Lorem</span>
                        </div>
                    </div>

                    {/* bottom-right */}
                    <div className="header-pop bottom-right">
                        <div>
                            <img src={infoSquare} alt="" />
                            <span>Lorem</span>
                        </div>
                    </div>

                    {/* bottom-left */}
                    <div className="header-pop bottom-left">
                        <div>
                            <img src={infoSquare} alt="" />
                            <span>Lorem ipsum</span>
                        </div>
                        <div>
                            <img src={infocircle} alt="" />
                            <span>Lorem</span>
                        </div>
                    </div>
                    {/* Header Image */}
                    <img className="header-dir-img" src={headerImg} alt="" />
                </div>
            </div>
            <div className="header-footer">
                {/* Header Footer Item */}
                <div className="header-footer-item">
                    <h1>5M+</h1>
                    <p>Lorem ipsum</p>
                </div>

                {/* Header Footer Item */}
                <div className="header-footer-item">
                    <h1>70M+</h1>
                    <p>Lorem ipsum</p>
                </div>

                {/* Header Footer Item */}
                <div className="header-footer-item">
                    <h1>55M+</h1>
                    <p>Lorem ipsum</p>
                </div>

                {/* Header Footer Item */}
                <div className="header-footer-item">
                    <h1>6.7%</h1>
                    <p>Lorem ipsum</p>
                </div>
            </div>

            {/* lights */}
            <img className='light header-top-left' src={Light} alt="" />
            <img className='light header-top-right' src={Light} alt="" />
            <img className='light header-bottom-right' src={Light} alt="" />
            {/* lights */}
            {/* Dots */}
            <img className='dots header-top-left' src={Dots} alt="" />
            <img className='dots header-bottom-right' src={Dots} alt="" />
            {/* Dots */}
        </div>
    )
}

export default Header

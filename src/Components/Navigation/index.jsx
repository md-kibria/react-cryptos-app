import React from 'react'
import './navigation.css'

function Navigaotn() {
    return (
        <div className='nav'>
            {/* logo */}
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="menu-section">
                <ul className="menus">
                    <li className="menu-item">Home</li>
                    <li className="menu-item">About</li>
                    <li className="menu-item">Sell</li>
                    <li className="menu-item">Services</li>
                    <li className="menu-item">Feedbacks</li>
                    <li className="menu-item">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navigaotn

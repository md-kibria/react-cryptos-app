import React from 'react'
import './sell.css'
import barChart from '../../images/bar_chart.png'
import lineChartUp from '../../images/line_chart_up.png'
import trendingUp from '../../images/trending_up.png'
import Light from '../../images/light-2.svg'
import Dots from '../../images/dots.svg'

function Sell() {
    return (
        <div className="sell">
            <div className="sell-header-section">
                <h1 className="main-header">Buy Cryptos At <span>True Cost</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ipsam adipisci eligendi similique dolore officiis, saepe minima delectus modi.</p>
            </div>
            <div className="sell-items-section">
                {/* Sell Item */}
                <div className="sell-item">
                    <div className="sell-item-desc">
                        <h3>Lorem »</h3>
                        <p>Lorem ipsum dolor sit amet conse ctetur adipi sicing elit.</p>
                    </div>
                    <div className="sell-item-img">
                        <img src={barChart} alt="" />
                    </div>
                </div>
                {/* Sell Item */}
                <div className="sell-item">
                    <div className="sell-item-desc">
                        <h3>Lorem »</h3>
                        <p>Lorem ipsum dolor sit amet conse ctetur adipi sicing elit.</p>
                    </div>
                    <div className="sell-item-img">
                        <img src={lineChartUp} alt="" />
                    </div>
                </div>
                {/* Sell Item */}
                <div className="sell-item">
                    <div className="sell-item-desc">
                        <h3>Lorem »</h3>
                        <p>Lorem ipsum dolor sit amet conse ctetur adipi sicing elit.</p>
                    </div>
                    <div className="sell-item-img">
                        <img src={trendingUp} alt="" />
                    </div>
                </div>
            </div>

            {/* lights */}
            <img className='light sell-top-left' src={Light} alt="" />
            <img className='light sell-top-middle' src={Light} alt="" />
            <img className='light sell-bottom-left' src={Light} alt="" />
            <img className='light sell-bottom-right' src={Light} alt="" />
            {/* lights */}
            {/* Dots */}
            <img className='dots sell-top-left' src={Dots} alt="" />
            <img className='dots sell-bottom-right' src={Dots} alt="" />
            {/* Dots */}
        </div>
    )
}

export default Sell

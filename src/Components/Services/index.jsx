import React from 'react'
import './services.css'
import barChartHorizontal from '../../images/bar_chart_horizontal.png'
import barChartSquare from '../../images/bar_chart_square.png'
import pieChart25 from '../../images/pie_chart_25.png'
import pieChartOutline from '../../images/pie_chart_outline.png'
import lineChartUp from '../../images/line_chart_up.png'
import doughnutChart from '../../images/doughnut_chart.png'
import Light from '../../images/light-2.svg'
import Dots from '../../images/dots.svg'


function Services() {
    return (
        <div className="services">
            {/* Services Header */}
            <div className="service-header">
                <h1 className="main-header">Our Provided <span>Servides</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, porro corrupti. Adipisci ducimus illo culpa, praesentium dicta</p>
            </div>
            {/* Services Items */}
            <div className="service-items">
                {/* Service Item */}
                <div className="service-item">
                    <img src={doughnutChart} alt=""/>
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit, amet conse ctetur adipis icing elit. Qui volup tatum ex simil ique lorem ipsum</p>
                </div>
                {/* Service Item */}
                <div className="service-item">
                    <img src={barChartSquare} alt=""/>
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit, amet conse ctetur adipis icing elit. Qui volup tatum ex simil ique lorem ipsum</p>
                </div>
                {/* Service Item */}
                <div className="service-item">
                    <img src={barChartHorizontal} alt=""/>
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit, amet conse ctetur adipis icing elit. Qui volup tatum ex simil ique lorem ipsum</p>
                </div>
                {/* Service Item */}
                <div className="service-item">
                    <img src={pieChartOutline} alt=""/>
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit, amet conse ctetur adipis icing elit. Qui volup tatum ex simil ique lorem ipsum</p>
                </div>
                {/* Service Item */}
                <div className="service-item">
                    <img src={lineChartUp} alt=""/>
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit, amet conse ctetur adipis icing elit. Qui volup tatum ex simil ique lorem ipsum</p>
                </div>
                {/* Service Item */}
                <div className="service-item">
                    <img src={pieChart25} alt=""/>
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit, amet conse ctetur adipis icing elit. Qui volup tatum ex simil ique lorem ipsum</p>
                </div>
            </div>

            {/* lights */}
            <img className='light service-top-right' src={Light} alt="" />
            <img className='light service-bottom-left' src={Light} alt="" />
            {/* lights */}
            {/* Dots */}
            <img className='dots service-top-left' src={Dots} alt="" />
            <img className='dots service-bottom-right' src={Dots} alt="" />
            {/* Dots */}
        </div>
    )
}

export default Services

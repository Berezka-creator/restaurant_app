import React from 'react'
import "./Menu.css"
import Salad from '../../images/menu1.jpg'
import Soup from '../../images/menu2.jpg'
import Pasta from '../../images/menu3.jpg'

import Salad2 from '../../images/menu4.jpg'
import Soup2 from '../../images/menu5.jpg'
import Pasta2 from '../../images/menu6.jpg'


export default function Menu() {
    return (
        <section className="menu" id="menu">
            <div className="title">
                <h2>Our <span>M</span>enu</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="content">  

                <div className="menuItem">
                    <div className="imgBx">
                        <img src={Salad} alt="" />
                    </div>
                    <div className="menuText">
                        <h3>Special Salads</h3>
                    </div>
                </div>

                <div className="menuItem">
                    <div className="imgBx">
                        <img src={Soup} alt="" />
                    </div>
                    <div className="menuText">
                        <h3>Special Salads</h3>
                    </div>
                </div>

                <div className="menuItem">
                    <div className="imgBx">
                        <img src={Pasta} alt="" />
                    </div>
                    <div className="menuText">
                        <h3>Special Salads</h3>
                    </div>
                </div>

                
                <div className="menuItem">
                    <div className="imgBx">
                        <img src={Salad2} alt="" />
                    </div>
                    <div className="menuText">
                        <h3>Special Salads</h3>
                    </div>
                </div>

                <div className="menuItem">
                    <div className="imgBx">
                        <img src={Soup2} alt="" />
                    </div>
                    <div className="menuText">
                        <h3>Special Salads</h3>
                    </div>
                </div>

                <div className="menuItem">
                    <div className="imgBx">
                        <img src={Pasta2} alt="" />
                    </div>
                    <div className="menuText">
                        <h3>Special Salads</h3>
                    </div>
                </div>
            </div>

            <div className="title">
                <a href="#" className='btn'>View All</a>
            </div>

        </section>
    )
}

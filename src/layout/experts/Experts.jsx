import React from 'react'
import './Experts.css'
import Expert1 from '../../images/expert1.jpg'
import Expert2 from '../../images/expert2.jpg'
import Expert3 from '../../images/expert3.jpg'

export default function Experts() {
    return (
        <section className="experts" id="experts">
            <div className="title">
                <h2>Our Kitchen <span>E</span>xperts</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="content">
                <div className="expertItem">
                    <div className="imgBx">
                        <img src={Expert1} alt="" />
                    </div>
                    <div className="expertText">Someone Famous</div>
                </div>

                <div className="expertItem">
                    <div className="imgBx">
                        <img src={Expert2} alt="" />
                    </div>
                    <div className="expertText">Someone Famous</div>
                </div>

                <div className="expertItem">
                    <div className="imgBx">
                        <img src={Expert3} alt="" />
                    </div>
                    <div className="expertText">Someone Famous</div>
                </div>
            </div>
        </section>
    )
}

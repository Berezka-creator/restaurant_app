import React from 'react'
import './Testimonials.css'
import Testi1 from '../../images/testi1.jpg'
import Testi2 from '../../images/testi2.jpg'
import Testi3 from '../../images/testi3.jpg'

export default function Testimonials() {
    return (
        <div className="testimonials">
            <div className="title">
                <h1 className="titleText">They <span>S</span>aid About Us</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="content">

                <div className="testItem">
                    <div className="imgBx">
                        <img src={Testi1} alt="" />
                    </div>
                    <div className="text">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil doloremque ut ad natus non explicabo hic nostrum eos obcaecati molestias dolore, quaerat illum necessitatibus vero mollitia nobis error quo pariatur.</p>
                        <h3>Someone Famous</h3>
                    </div>
                </div>

                <div className="testItem">
                    <div className="imgBx">
                        <img src={Testi2} alt="" />
                    </div>
                    <div className="text">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil doloremque ut ad natus non explicabo hic nostrum eos obcaecati molestias dolore, quaerat illum necessitatibus vero mollitia nobis error quo pariatur.</p>
                        <h3>Someone Famous</h3>
                    </div>
                </div>

                <div className="testItem">
                    <div className="imgBx">
                        <img src={Testi3} alt="" />
                    </div>
                    <div className="text">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil doloremque ut ad natus non explicabo hic nostrum eos obcaecati molestias dolore, quaerat illum necessitatibus vero mollitia nobis error quo pariatur.</p>
                        <h3>Someone Famous</h3>
                    </div>
                </div>


            </div>
            
        </div>
    )
}

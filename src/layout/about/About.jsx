import React from 'react'
import './About.css'
import PizzaImg from '../../images/img1.jpg'

export default function About() {
    return (
        <div className="about" id="about">
            <div className="aboutParagraph">
                <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In maiores ab veniam similique illum autem non odit sunt, id voluptates commodi alias ex. Accusamus sint aliquid modi officiis est quas.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In maiores ab veniam similique illum autem non odit sunt, id voluptates commodi alias ex. Accusamus sint aliquid modi officiis est quas.</p>
            </div>
            <div className="aboutImg">
                <div className="imgContainer">
                    <img src={PizzaImg} alt="" />
                </div>
            </div>
        </div>
    )
}

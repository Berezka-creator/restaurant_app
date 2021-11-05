import React from 'react'
import "./Layout.css";
import AboutSection from './about/About'
import BannerSection from './banner/Banner'
import MenuSection from './menu/Menu'
import TestimonialsSection from './testimonials/Testimonials'
import ContactSection from './contact/Contact'
import PizzaImg from '../images/img1.jpg'

export default function Layout() {
    return (
        <div className="layout">
            <div className="header">
                <a href="#" className="logo">Food<span>.</span></a>
                <ul className="navigation">
                    <li><a href="#banner">Home</a></li>
                    <li><a href="#about">ABout</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#expert">Expert</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

            </div>
           
                <BannerSection />
                <AboutSection />

              
        

           
            <section className="menu">
                Menu
            </section>
            <section className="testimonials">
                Testimonial
            </section>
            <section className="contact">Contact</section>

           
        </div>
    )
}

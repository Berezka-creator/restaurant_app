import React from 'react'
import "./Layout.css";
import Header from "./header/Header"
import AboutSection from './about/About'
import BannerSection from './banner/Banner'
import MenuSection from './menu/Menu'
import ExpertsSection from './experts/Experts'
import TestimonialsSection from './testimonials/Testimonials'
import ContactSection from './contact/Contact'
import { HashLink as Link} from 'react-router-hash-link'
import { Route, Switch, Router, Redirect } from 'react-router-dom'


export default function Layout() {
    return (
        <div className="layout">
            <Header />
          
          
                <BannerSection  />
                <AboutSection/>
                <MenuSection />
                <ExpertsSection />
                <TestimonialsSection  />
                <ContactSection  />
            <div className="copyrightText">
                <p>Copyright 2021 <a href="#">Julia Berezina. All Right Reserved</a></p>
            </div>
        </div>
    )
}

import React from 'react'
import { useState, useEffect } from "react";
import "./Layout.css";
import Header from "./header/Header"
import MobileNav from './mobileNav/MobileNav'
import AboutSection from './about/About'
import BannerSection from './banner/Banner'
import MenuSection from './menu/Menu'
import ExpertsSection from './experts/Experts'
import TestimonialsSection from './testimonials/Testimonials'
import ContactSection from './contact/Contact'
import { HashLink as Link} from 'react-router-hash-link'
import { Route, Switch, Router, Redirect } from 'react-router-dom'


export default function Layout() {

    const [headerScroll, setHeaderScroll] = useState(true)

    const [menuOpen, setMenuOpen] = useState(false)

    const listenScrollEvent = () => {
       window.scrollY > 10
        ? setHeaderScroll(true)
        : setHeaderScroll(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        // return() =>
        //     window.removeEventListener('scroll', listenScrollEvent);

    }, []);

    return (
        <div className="layout">
            <Header menuOpen={menuOpen} 
                    headerScroll={headerScroll}
                    setMenuOpen={setMenuOpen}/>
            <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

            <div className="sections">
                <BannerSection  />
                <AboutSection/>
                <MenuSection />
                <ExpertsSection />
                <TestimonialsSection  />
                <ContactSection  />

            </div>
          
               
            <div className="copyrightText">
                <p>Copyright 2021 <a href="#">Julia Berezina. All Right Reserved</a></p>
            </div>
        </div>
    )
}

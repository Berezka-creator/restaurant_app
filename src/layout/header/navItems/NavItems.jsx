import React from 'react'
import "./NavItems.css"
import NavItem from './navItem/NavItem'

export default function NavItems() {
    return (
            <ul className="main-navigation">
                <NavItem link="#banner">Home</NavItem>
                <NavItem link="#about">About</NavItem>
                <NavItem link="#menu">Menu</NavItem>
                <NavItem link="#experts">Experts</NavItem>
                <NavItem link="#testimonials">Testimonials</NavItem>
                <NavItem link="#contact">Contact</NavItem>
            </ul>
      
    )
}

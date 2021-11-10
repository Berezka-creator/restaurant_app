import React from 'react'
import "./NavItems.css"
import NavItem from './navItem/NavItem'

export default function NavItems(props) {
    return (
            <ul className={props.itemsStyle}>
                {/* props.ItemsStyle : .mobile_nav for mobile and .main_nav for desktop */}
                <NavItem 
                   
                    link="#banner">Home</NavItem>
                <NavItem 
                  
                    link="#about">About</NavItem>
                <NavItem 
                 
                    link="#menu">Menu</NavItem>
                <NavItem 
               
                    link="#experts">Experts</NavItem>
                <NavItem 
              
                    link="#testimonials">Testimonials</NavItem>
                <NavItem 
                
                    link="#contact">Contact</NavItem>
            </ul>
      
    )
}

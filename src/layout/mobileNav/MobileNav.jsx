import React from 'react'
import './MobileNav.css'
import NavItems from '../nav/navItems/NavItems'

export default function MobileNav({menuOpen, setMenuOpen}) {
    return (
      <div className="mobileNav ">
        <div className ={"sideDrawer "+ (menuOpen && "active")}>
              
          <NavItems itemsStyle="mobile-nav_items" />
        </div>
       
          <div className={"backDrop "+ (menuOpen && "active")}></div>
      </div>
    )
}
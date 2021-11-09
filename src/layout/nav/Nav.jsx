import React from 'react'
import "./Nav.css"
import NavItems from './navItems/NavItems'

export default function Nav() {
    return (
      <div className="nav">
        <NavItems 
          itemsStyle="main-nav_items"
          />

      </div>       
    )
}

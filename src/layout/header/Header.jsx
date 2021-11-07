import React from 'react'
import "./Header.css"
import NavItems from './navItems/NavItems'

export default function Header() {
    return (
        <div className="header">
            <a href="#" className="logo">Food<span>.</span></a>
            <NavItems />
         
        </div>
    )
}

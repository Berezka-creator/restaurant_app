import React from 'react'
import "./Header.css"
import Nav from '../nav/Nav'


export default function Header({menuOpen, setMenuOpen}) {
    return (
        <div className={"header "+(menuOpen && "active")}>
            <a href="#" className={"logo "+(menuOpen && "active")}>Food<span>.</span></a>
            
            <Nav />

            <div className={"toggle-button " + (menuOpen && "active")} 
                 onClick ={() => setMenuOpen(!menuOpen)}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div>
    )
}

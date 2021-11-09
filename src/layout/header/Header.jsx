import React from 'react'
import "./Header.css"
import Nav from '../nav/Nav'


export default function Header({menuOpen, setMenuOpen, headerScroll}) {
    return (
        <div className={"header "+(menuOpen && "active ") + (headerScroll && " scroll")}>
            <a href="#" className={"logo "+(menuOpen && "active ")  + (headerScroll && " scroll")}>Food<span>.</span></a>
            
            <Nav />

            <div className={"toggle-button " + (menuOpen && "active ")  + (headerScroll && " scroll")} 
                 onClick ={() => setMenuOpen(!menuOpen)}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div>
    )
}

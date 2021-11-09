import React from 'react'
import "./NavItem.css"

export default function NavItem(props) {
    return (
        <li className={props.itemStyle}>
            {/* style can be .main-nav_item or .mobile-nav_item */}
            <a href={props.link}>{props.children}</a>
        </li>        
    )
}

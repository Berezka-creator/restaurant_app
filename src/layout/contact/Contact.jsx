import React from 'react'
import "./Contact.css"

export default function Contact() {
    return (
        <div className="contact" id="contact">
            
            <div className="title">
                <h1 className="titleText"><span>C</span>ontact</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="contactForm">
                <h3>Send Message</h3>
                <div className="inputBox">
                    <input type="text" placeholder="Name" />
                </div>
                <div className="inputBox">
                    <input type="text" placeholder="Email" />
                </div>
                <div className="inputBox">
                    <textarea type="text"></textarea>
                </div>
              
                <div className="inputBox">
                    <input type="submit" value="Send" />
                </div>


            </div>


            
        </div>
    )
}

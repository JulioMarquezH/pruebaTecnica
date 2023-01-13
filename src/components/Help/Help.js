import React from "react"
import iconFace from "../../images/iconFace.svg"
import iconTwitter from "../../images/iconTwitter.svg"
import iconInstagram from "../../images/iconInstagram.svg"
import iconBasketball from "../../images/iconBasketball.svg"
import "./Help.css"

function Help() {
  return (
    <div className="help">
      <nav className="contact-us">
        <a className="contact-us-number contact-us-bars-left contact-us-bars-right">
          +1 212 946 2700
        </a>
        <a className="contact-us-bars contact-us-bars-right">Help Desk</a>
        <a>Why Sway</a>
      </nav>
      <nav className="social-media">
        <a className="contact-us-bars-right">
          <img className="social-media-icon" src={iconFace}></img>
        </a>
        <a className="contact-us-bars-right">
          <img className="social-media-icon" src={iconTwitter}></img>
        </a>
        <a className="contact-us-bars-right">
          <img className="social-media-icon" src={iconInstagram}></img>
        </a>
        <a className="contact-us-bars-right">
          <img className="social-media-icon" src={iconBasketball}></img>
        </a>
      </nav>
    </div>
  )
}

export default Help

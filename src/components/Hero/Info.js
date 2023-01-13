import React from "react"
import rightArrow from "../../images/rightArrow.svg"
import play from "../../images/play.svg"
import "./Info.css"
import Button from "../Button/Button"

function Info() {
  return (
    <main className="main">
      <div className="main-switch">
        <p className="switch-p1">Welcome to Sway</p>
        <p className="switch-p2">Your partner for mobile and web products</p>
      </div>
      <h1 className="main-h1">We create digital experiences</h1>
      <p className="main-welcome">
        We have the knowledge and expertise in design and modern programming
        languages and platforms to help startups and growing companies build
        successful products.
      </p>
      <div>
        <Button
          name="Get Started"
          style="button-hero-primary"
          icon={rightArrow}
        ></Button>
        <Button
          name="Watch Our Reel"
          style="button-hero-secondary"
          icon={play}
        ></Button>
      </div>
    </main>
  )
}

export default Info

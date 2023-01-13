import React from "react"
import like from "../../images/like.svg"
import computer from "../../images/computer.svg"
import help from "../../images/help.svg"
import "./Card.css"

function Card({ icon, title, description, link }) {
  return (
    <div className="card">
      <span className="icon-card">
        <img className="icon-card-image" src={icon}></img>
      </span>
      <h4 className="card-title">{title}</h4>
      <p className="card-description">{description}</p>
      <a className="card-link" href={link}>
        Learn More
      </a>
    </div>
  )
}

export default Card

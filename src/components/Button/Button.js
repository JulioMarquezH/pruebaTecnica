import React from "react"
import "./Button.css"
import rightArrow from "../../images/rightArrow.svg"

function Button(props) {
  return (
    <button className={props.style}>
      {props.name}
      <img className="icon-button" src={props.icon}></img>
    </button>
  )
}

export default Button

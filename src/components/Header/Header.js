import React from "react"
import logo from "../../images/logo.svg"
import downArrow from "../../images/downArrow.svg"
import car from "../../images/car.svg"
import search from "../../images/search.svg"
import "./Header.css"
import Button from "../Button/Button"

function header() {
  return (
    <div className="flex">
      <span>
        <img className="logo" src={logo}></img>
      </span>
      <div className="flex">
        <nav className="flex">
          <div className="margin-right">
            <a className="flex">
              Home
              <img className="down-arrow" src={downArrow}></img>
            </a>
            <i>{/* punto verde */}</i>
          </div>
          <a className="margin-right">About</a>
          <a className="margin-right">Services</a>
          <a className="margin-right">Pricing</a>
          <a className="margin-right">Products</a>
          <a className="margin-right">News</a>
          <span className="margin-right">
            <img className="icon-header" src={car}></img>
          </span>
          <span className="margin-right">
            <img className="icon-header" src={search}></img>
          </span>
        </nav>
        <Button name="Contact Us" style="button-header"></Button>
      </div>
    </div>
  )
}

export default header

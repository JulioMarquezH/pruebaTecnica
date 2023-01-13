import React from "react"
import rightArrow from "../../images/rightArrow.svg"
import Button from "../Button/Button"
import "./InfoProcess.css"

function InfoProcess() {
  return (
    <div className="infoProcess">
      <div className="info-box">
        <p className="info-p">Successful creative is rooted in strategy</p>

        <h3 className="info-title">
          We partner with companies to bring clarity to their brand
        </h3>

        <p className="info-description">
          We develop enjoyable consumer experiences, from digital strategy and
          content to media and analysis. Leading to meaningful results and
          satisfied clients.
        </p>
      </div>
      <Button
        name="Our Process"
        style="button-hero-primary"
        icon={rightArrow}
      ></Button>
    </div>
  )
}

export default InfoProcess

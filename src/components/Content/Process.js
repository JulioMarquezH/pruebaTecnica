import React from "react"
import InfoProcess from "./InfoProcess"
import ViewProcess from "./ViewProcess"
import "./Process.css"

function Process() {
  return (
    <div className="process">
      <ViewProcess></ViewProcess>
      <InfoProcess></InfoProcess>
    </div>
  )
}

export default Process

import React from "react"
import "./ViewProcess.css"

function ViewProcess() {
  return (
    <div className="view">
      <span className="">
        <video
          className="video"
          src="video.mp4"
          width="570"
          height="420"
        ></video>
      </span>
    </div>
  )
}

export default ViewProcess

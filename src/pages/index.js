import React from "react"
import Help from "../components/Help/Help"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Content from "../components/Content/Content"
import "./index.css"

function index() {
  return (
    <div className="container">
      <Help></Help>
      <Header></Header>
      <Hero></Hero>
      <Content></Content>
    </div>
  )
}

export default index

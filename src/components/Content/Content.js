import React from "react"
import Process from "./Process"
import like from "../../images/like.svg"
import computer from "../../images/computer.svg"
import help from "../../images/help.svg"
import "./Content.css"
import Card from "./Card"

const info = [
  {
    icon: like,
    title: "Branding",
    description:
      "We create effective action plans and design optimal business strategies",
    link: "#1",
  },
  {
    icon: computer,
    title: "Development",
    description:
      "We create effective action plans and design optimal business strategies",
    link: "#2",
  },
  {
    icon: help,
    title: "Strategy",
    description:
      "We create effective action plans and design optimal business strategies",
    link: "#3",
  },
]
function Content() {
  return (
    <div className="content">
      <section className="content-info">
        <h3 className="content-title">
          Crafting effective design and UX design
        </h3>
        <p className="content-description">
          We are a customer-first eCommerce agency, combining the best of UX
          design, technology and analytics to create sites that shoppers love
          and retention tactics that keep them coming back
        </p>
      </section>
      <div className="cards">
        {info.map(item => {
          return <Card {...item} />
        })}
      </div>

      <Process></Process>
    </div>
  )
}

export default Content

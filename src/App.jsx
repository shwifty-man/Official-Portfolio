import './star.scss'
import "./Styles/Hero.css"
import "./Styles/Skills.css"
import "./Styles/Projects.css"
import "./Styles/Contact.css"
import "./Styles/Git.css"
import "./Styles/Side-links.css"

import { useRef } from "react";
import Hero from './Sections/Hero.jsx'
import Skills from './Sections/Skills.jsx'
import Projects from './Sections/Projects.jsx'
import Contact from './Sections/Contact.jsx'
import SideLinks from './Content/Side-links.jsx'

function App() {
  const targetElement = useRef(null);
  return (
    <>
      <SideLinks />
      <div className="hero-outer-container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <Hero targetElement={targetElement} />
      </div>

      <Skills />

      <section className="projects-outer-container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <Projects ref={targetElement} />
      </section>
      <Contact />
    </>
  )
}

export default App
import './star.scss'
import "./Styles/Hero.css"
import "./Styles/Skills.css"
import "./Styles/Projects.css"
import "./Styles/Contact.css"
import "./Styles/Git.css"

import Hero from './Sections/Hero.jsx'
import Skills from './Sections/Skills.jsx'
import Projects from './Sections/Projects.jsx'
import Contact from './Sections/Contact.jsx'

function App() {
  return (
    <>
      <div className="hero-outer-container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <Hero />
      </div>

      <Skills />

      <section className="projects-outer-container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <Projects />
      </section>
      <Contact />
    </>
  )
}

export default App
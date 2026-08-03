import './star.scss'
import "./Styles/Hero.css"
import "./Styles/Skills.css"
import "./Styles/Projects.css"
import "./Styles/Contact.css"
import "./Styles/Git.css"
import "./Styles/Side-links.css"
import "./Styles/AiChat.css"

import { useRef, useState } from "react";
import Hero from './Sections/Hero.jsx'
import Skills from './Sections/Skills.jsx'
import Projects from './Sections/Projects.jsx'
import Contact from './Sections/Contact.jsx'
import SideLinks from './Content/Side-links.jsx'
import ChatButton from './Content/Chat-button.jsx'

function App() {
  const targetElement = useRef(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openAiAssistant = () => {
    setIsChatOpen(true);
    window.dispatchEvent(new CustomEvent("open-ai-chat"));
  };

  const closeAiAssistant = () => {
    setIsChatOpen(false);
    window.dispatchEvent(new CustomEvent("close-ai-chat"));
  };

  return (
    <>
      <ChatButton onChatStateChange={setIsChatOpen} />
      <SideLinks onOpenAssistant={openAiAssistant} isChatOpen={isChatOpen} />
      <div id="home" className="hero-outer-container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <Hero targetElement={targetElement} />
      </div>

      <Skills />

      <section id="projects" className="projects-outer-container">
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
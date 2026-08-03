import { FaGithub, FaLinkedin, FaArrowCircleDown, FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { handleProjectUrl } from "../helper.js"
import { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import { MdHome } from 'react-icons/md';
import { FaCode } from "react-icons/fa6";
import { FaBriefcase, FaIdCard, FaChevronRight } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6"
import aiChatIcon from "../assets/chat-head-icon.png";

export default function SideLinks({ onOpenAssistant, isChatOpen = false }) {
    const [toggle, setToggle] = useState(false);

    const closeMenu = () => setToggle(false);

    const scrollToSection = (id) => {
        closeMenu();
        const element = document.getElementById(id);

        if (!element) return;


        const offsetPosition = element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };

    return (
        <>
            {toggle && (
                <div className="side-menu-overlay" onClick={closeMenu} />
            )}

            <div className={`toggle-menu ${toggle ? "true" : "false"} ${isChatOpen ? "dimmed" : ""}`}>
                <Hamburger
                    color="#fff"
                    toggled={toggle}
                    toggle={setToggle}
                />
            </div>

            <div className={`side-links-container ${toggle ? "true" : "false"}`}>
                <div className="side-links-title">
                    <h3>Timothy Williams</h3>
                    <h4>Full-Stack Engineer</h4>
                </div>
                <div className="toggle-menu-nav">
                    <button type="button" onClick={() => scrollToSection("home")}><MdHome size={20} /> Home</button>
                    <button type="button" onClick={() => scrollToSection("skills-scroll")}><FaCode size={20} /> Skills</button>
                    <button type="button" onClick={() => scrollToSection("projects")}><FaBriefcase size={20} /> Projects</button>
                    <button type="button" onClick={() => scrollToSection("contact")}><FaRegEnvelope size={20} /> Contact</button>
                </div>

                <div className="side-icons-wrapper">
                    <div onClick={handleProjectUrl("https://github.com/shwifty-man")} className="github-icon side-icon" title="GitHub">
                        <FaGithub className="icon-div" size={25} color="#fff" />
                        <h3>GitHub</h3>
                    </div>


                    <div onClick={handleProjectUrl("https://www.linkedin.com/in/timothy--c--williams/")} className="linkedIn-icon side-icon" title="LinkedIn">
                        <FaLinkedin className="icon-div" size={25} color="#0A66C2" />
                        <h3>LinkedIn</h3>
                    </div>

                    <a id="download-a side-icon" href="/Timothy_Williams_Full-Stack_Engineer_Resume.pdf" download title="Download Resume">
                        <div className="download-icon side-icon" title="Download Resume">
                            <FaArrowCircleDown size={25} color="#000" />
                            <h4>Download Resume</h4>
                        </div>
                    </a>
                </div>


                <div className="ai-assistant" onClick={() => { closeMenu(); onOpenAssistant?.(); }}>
                    <img src={aiChatIcon} alt="AI chat button" />
                    <div>
                        <h4>Let's Chat!</h4>
                        <h5>AI Assistant</h5>
                    </div>
                    <FaChevronRight size={20} color="#D74A49" />
                </div>
            </div>
        </>
    );
}

import { FaGithub, FaLinkedin, FaArrowCircleDown, FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { handleProjectUrl } from "../helper.js"
import { useState } from "react";

export default function SideLinks() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className={`side-links-container ${toggle ? "true" : "false"}`}>
                <div
                    onClick={() => setToggle(!toggle)}
                    className={`toggle-arrow ${toggle ? "true" : "false"}`}>
                    {toggle ? <FaArrowCircleLeft size={30} color="rgb(255, 255, 255, 0.8)" /> : <FaArrowCircleRight size={30} color="rgb(255, 255, 255, 0.8)" />}
                </div>
                <div onClick={handleProjectUrl("https://github.com/shwifty-man")} className="github-icon" title="GitHub">
                    <FaGithub className="icon-div" size={40} color="#fff" />
                </div>
                <div onClick={handleProjectUrl("https://www.linkedin.com/in/timothy--c--williams/")} className="linkedIn-icon" title="LinkedIn">
                    <FaLinkedin className="icon-div" size={40} color="#0A66C2" />
                </div>
                <div className="download-icon" title="Download Resume">
                    <a id="download-a" href="/Timothy_Williams_Full-Stack_Engineer_Resume.pdf" download title="Download Resume">
                        <FaArrowCircleDown size={40} color="#000" />
                    </a>
                </div>
            </div>
        </>
    );
}

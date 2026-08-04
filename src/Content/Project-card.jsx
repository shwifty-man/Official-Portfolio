import left from "../assets/left.jpg"
import right from "../assets/right.jpg"
import { handleProjectUrl } from "../helper.js"
import smallAstronaut from "../assets/small_astronaut_floating.png"

import {
    SiJavascript,
    SiHtml5,
    SiJson,
    SiExpo,
    SiPython,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiGit,
    SiGithub,
    SiLinux,
    SiMistralai,
    SiNpm,
    SiVite,
    SiMysql,
    SiCloudflare,
    SiAndroid
} from "react-icons/si";
import { FaCss3Alt, FaWindows, FaFigma } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";


function ProjectCard({ url, string, name, description, techList }) {
    const images = {
        left,
        right
    };

    let list = [];
    let leftList = [
        { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
        { Icon: SiReact, label: "React Native", color: "#61DAFB" },
        { Icon: SiExpo, label: "Expo", color: "#FFFFFF" },
        { Icon: SiAndroid, label: "Android", color: "#3DDC84" },
        { Icon: SiNodedotjs, label: "Node.js", color: "#339933" },
        { Icon: SiExpress, label: "Express", color: "#FFFFFF" },
        { Icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
        { Icon: SiGit, label: "Git", color: "#F05032" },
        { Icon: SiGithub, label: "GitHub", color: "#FFFFFF" },
        { Icon: SiNpm, label: "NPM", color: "#CB3837" }
    ];

    let rightList = [
        { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
        { Icon: SiReact, label: "React", color: "#61DAFB" },
        { Icon: SiNodedotjs, label: "Node.js", color: "#339933" },
        { Icon: SiExpress, label: "Express", color: "#FFFFFF" },
        { Icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
        { Icon: SiMistralai, label: "Mistral AI", color: "#FF7000" },
        { Icon: SiGit, label: "Git", color: "#F05032" },
        { Icon: SiGithub, label: "GitHub", color: "#181717" },
    ];

    if (string === "left") {
        list = leftList;
    } else {
        list = rightList;
    }

    return (
        <>
            <div className={`${string}-project-wrapper project-whole-wrapper`}>
                <div className="project-card-hover">
                    <section
                        onClick={handleProjectUrl(url)}
                        className={`project-${string}-card-container project-card`}
                    >
                        <h2>{name}</h2>
                        <img src={images[string]} alt={`${string} project image`} />
                    </section>
                </div>

                <div className="project-description">
                    <h3>About this project</h3>
                    <p>{description}</p>

                    <div className="skill-used-box">

                        <h4>Technologies used:</h4>
                        <div className="skill-used-list">
                            {list?.map(({ Icon, label, color }, key) => (
                                <div
                                    className="skill-used-wrapper"
                                    key={key}
                                    title={label}
                                >
                                    <Icon className="skill-used" size={20} color={color} />
                                    <span className="skill-used-label">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <h6 style={{ color: "#acababd5" }}>
                        And more listed on resume
                    </h6>
                </div>
            </div>
        </>
    );
}

function SmallFloatingAstronaut() {
    return (
        <>
            <div className="small_astronaut">
                <img className="small-astronaut" src={smallAstronaut} />
            </div>
        </>
    );
}

export { ProjectCard, SmallFloatingAstronaut };
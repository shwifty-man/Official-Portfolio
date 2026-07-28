import { useRef } from "react";
import ProjectCard from "../Content/Project-card.jsx";
import { useIsVisible } from "../helper.js";

function Projects() {
    const targetElement = useRef(null);
    const targetVisible = useIsVisible(targetElement);

    return (
        <section
            ref={targetElement}
            className={`projects-content ${targetVisible ? "visible" : ""}`}
        >
            <ProjectCard string="left" name="QuestTracker" />
            <ProjectCard string="right" name="FeelClear" />
        </section>
    );
}

export default Projects;
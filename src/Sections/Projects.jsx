import { ProjectCard, SmallFloatingAstronaut } from "../Content/Project-card.jsx";
import { useIsVisible } from "../helper.js";
import smallAstronaut from "../assets/small_astronaut_floating.png"

function Projects({ ref }) {
    const targetVisible = useIsVisible(ref);

    return (
        <section
            id="projects"
            className={`projects-outer-container ${targetVisible ? "visible" : ""}`}
            ref={ref}
        >
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>


            <section
                id="projects-content"
                className="projects-content"
            >
                <ProjectCard
                    url="https://github.com/shwifty-man/Sl_Quest_Tracker"
                    string="left"
                    name="QuestTracker"
                    description="QuestTracker is a mobile application for managing goals, tracking progress, and enforcing penalties to help users stay accountable and motivated."
                />
                <SmallFloatingAstronaut />

                <ProjectCard
                    url="https://github.com/shwifty-man/FeelClear-frontend"
                    string="right"
                    name="FeelClear"
                    description="FeelClear is a mobile application that helps users connect with a partner, manage their profile, and access guided conversational support for everyday emotional or relationship-related needs." />
            </section>
        </section>
    );
}

export default Projects;
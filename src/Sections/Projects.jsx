
import { ProjectCard, SmallFloatingAstronaut } from "../Content/Project-card.jsx";
import { useIsVisible } from "../helper.js";
import smallAstronaut from "../assets/small_astronaut_floating.png"

function Projects({ ref }) {
    const targetVisible = useIsVisible(ref);

    return (
        <section
            ref={ref}
            className={`projects-content ${targetVisible ? "visible" : ""}`}
        >
            <ProjectCard url="https://github.com/shwifty-man/Sl_Quest_Tracker" string="left" name="QuestTracker" />
            <SmallFloatingAstronaut />
            <ProjectCard url="https://github.com/shwifty-man/FeelClear-frontend" string="right" name="FeelClear" />
        </section>
    );
}

export default Projects;
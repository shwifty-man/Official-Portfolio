import left from "../assets/left.jpg"
import right from "../assets/right.jpg"
import { handleProjectUrl } from "../helper.js"
import smallAstronaut from "../assets/small_astronaut_floating.png"

function ProjectCard({ url, string, name }) {
    const images = {
        left,
        right
    };

    return (
        <>
            <div className="project-card-hover">
                <section onClick={handleProjectUrl(url)} className={`project-${string}-card-container project-card`}>
                    <h2>{name}</h2>
                    <img src={images[string]} alt={`${string} project image`} />

                </section>
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
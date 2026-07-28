import left from "../assets/left.jpg"
import right from "../assets/right.jpg"
import { handleProjectUrl } from "../helper.js"

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

export default ProjectCard;
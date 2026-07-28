import left from "../assets/left.jpg"
import right from "../assets/right.jpg"

function ProjectCard({ string, name }) {
    const images = {
        left,
        right
    };

    return (
        <>
            <section className={`project-${string}-card-container project-card`}>
                <h2>{name}</h2>
                <img src={images[string]} alt={`${string} project image`} />

            </section>
        </>
    );
}

export default ProjectCard;
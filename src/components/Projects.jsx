import ProjectsFilter from './ProjectsFilter';
import ProjectsCard from './ProjectCard';

const Projects = ({ }) => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <ProjectsFilter />
            <ProjectsCard />
            <button>
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 1.5L13 15.5L24 1.5" stroke="#6693DE" stroke-width="3" />
                </svg>
                Discover More
            </button>
        </section>
    );
};

export default Projects;

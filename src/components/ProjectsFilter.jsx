const Projects = ({ }) => {
    return (
        <div>
            <h3>Projects Filter</h3>
            <label>
                <span>All</span>
                <input type="radio" name="filter" value={"all"} />
            </label>
            <label>
                <span>Design</span>
                <input type="radio" name="filter" value={"design"} />
            </label>
            <label>
                <span>Motion</span>
                <input type="radio" name="filter" value={"motion"} />
            </label>
            <label>
                <span>UX</span>
                <input type="radio" name="filter" value={"ux"} />
            </label>
            <label>
                <span>Development</span>
                <input type="radio" name="filter" value={"development"} />
            </label>
        </div>
    );
};

export default Projects;
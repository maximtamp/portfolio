const ProjectsFilter = ({ filter, setFilter }) => {
    return (
        <div className="mt-20 z-901">
            <h3 className="visually-hidden">Projects Filter</h3>
            <div className="flex w-full">
                <div className="relative inline-block w-full mx-4">    
                    <select name="filter" id="filter" onChange={(e) => setFilter(e.target.value)} className="bg-blue w-full px-3 py-2 text-white text-[18px] uppercase appearance-none -webkit-appearance-none -moz-appearance-none focus:outline-none focus:border-none focus:box-shadow-none">
                        <option value="all">All</option>
                        <option value="Design">Design</option>
                        <option value="Motion">Motion</option>
                        <option value="UX">UX</option>
                        <option value="Development">Development</option>
                    </select>
                    <img
                        src={new URL("../assets/dropdown-arrow.svg", import.meta.url).href}
                        alt=""
                        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
                    />
                </div>
            </div>
            <div className="hidden">
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
        </div>
    );
};

export default ProjectsFilter;
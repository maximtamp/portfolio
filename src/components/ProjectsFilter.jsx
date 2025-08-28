const ProjectsFilter = ({ filter, setFilter }) => {
    return (
        <div className="mt-20 z-901">
            <h3 className="visually-hidden">Projects Filter</h3>
            <div className="flex w-full min-[880px]:hidden">
                <div className="relative inline-block w-[clamp(21.4375rem,_-2rem_+_100vw,_31.25rem)] mx-[clamp(1rem,_-15.625rem_+_50vw,_11.875rem)]">    
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
            <div className="max-[880px]:hidden flex text-[20px] mx-auto mb-16 w-max">
                <label className="cursor-pointer flex flex-col" onClick={(e) => setFilter(e.target.value)}>
                    <input type="radio" name="filter" value="all" className="peer hidden" defaultChecked />
                    <span className="px-3 py-1">All</span>
                    <span className="h-1 w-full border-b-1 peer-checked:border-b-4"></span>
                </label>
                <label className="cursor-pointer flex flex-col" onClick={(e) => setFilter(e.target.value)}>
                    <input type="radio" name="filter" value="Design" className="peer hidden" />
                    <span className="px-3 py-1">Design</span>
                    <span className="h-1 w-full border-b-1 peer-checked:border-b-4"></span>
                </label>
                <label className="cursor-pointer flex flex-col" onClick={(e) => setFilter(e.target.value)}>
                    <input type="radio" name="filter" value="Motion" className="peer hidden" />
                    <span className="px-3 py-1">Motion</span>
                    <span className="h-1 w-full border-b-1 peer-checked:border-b-4"></span>
                </label>
                <label className="cursor-pointer flex flex-col" onClick={(e) => setFilter(e.target.value)}>
                    <input type="radio" name="filter" value="UX" className="peer hidden" />
                    <span className="px-3 py-1">UX</span>
                    <span className="h-1 w-full border-b-1 peer-checked:border-b-4"></span>
                </label>
                <label className="cursor-pointer flex flex-col" onClick={(e) => setFilter(e.target.value)}>
                    <input type="radio" name="filter" value="Development" className="peer hidden" />
                    <span className="px-3 py-1">Development</span>
                    <span className="h-1 w-full border-b-1 peer-checked:border-b-4"></span>
                </label>
            </div>
        </div>
    );
};

export default ProjectsFilter;
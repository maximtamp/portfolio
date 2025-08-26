import ProjectsFilter from './ProjectsFilter';
import ProjectsCard from './ProjectCard';
import { projects } from '../data';
import { useState, useRef } from 'react';

const Projects = () => {
    const [filter, setFilter] = useState("all");
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef(null);

    const changeFilter = (category) => {
        setFilter(category);
        setFilteredProjects(category === "all" ? projects : projects.filter(project => project.category.includes(category)));
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.offsetWidth;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const onScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const cardWidth = scrollRef.current.firstChild.offsetWidth;
            const index = Math.round(scrollLeft / cardWidth);
            setCurrentIndex(index);
        }
    };

    return (
        <section id="projects" className='w-full overflow-hidden'>
            <h2 className='text-[72px] text-black font-bold font-helvetica uppercase -ml-1.5 -mt-8'>Projects</h2>
            <ProjectsFilter filter={filter} setFilter={changeFilter} />
            <ul className='flex mt-7 overflow-auto scroll-smooth snap-x snap-mandatory no-scrollbar -ms-overflow-style-none' ref={scrollRef} onScroll={onScroll}>
                {filteredProjects.map((project, index) => (
                    <ProjectsCard key={index} project={project} />
                ))}
            </ul>
            <button className='visually-hidden'>
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 1.5L13 15.5L24 1.5" stroke="#6693DE" stroke-width="3" />
                </svg>
                Discover More
            </button>
            <div className="flex justify-between px-4 mt-8">
                <button onClick={() => scroll('left')} className="bg-black p-3">
                    <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.92506e-07 15.8161L28 -3.8147e-06L28 32L4.92506e-07 15.8161Z" fill="#F2F2F2" />
                    </svg>
                </button>
                <ul className="flex items-center gap-1.5">
                    {
                        filteredProjects.map((project, i) => (
                            <li key={i} className={`inline-block h-2 w-2 ${i === currentIndex ? "bg-blue h-3 w-3" : "bg-black"}`}></li>
                        ))
                    }
                </ul>
                <button onClick={() => scroll('right')} className="bg-black p-3">
                    <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28 15.8161L2.79753e-06 -3.8147e-06L0 32L28 15.8161Z" fill="#F2F2F2" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Projects;

import ProjectsFilter from './ProjectsFilter';
import ProjectsCard from './ProjectCard';
import { projects } from '../data';
import { useState, useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
    const [filter, setFilter] = useState("all");
    const [filteredProjects, setFilteredProjects] = useState(
        () => {
            if(window.innerWidth < 880) {
                return projects;
            } else {
                return projects.slice(0, 2);
            }
        }
    );

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const scrollRef = useRef(null);
    const containerRef = useRef(null);

    const changeFilter = (category) => {
        setFilter(category);
        if (showMore) {
            setFilteredProjects(category === "all" ? projects : projects.filter(project => project.category.includes(category)))
        } else {
            if (window.innerWidth < 880) {
                setFilteredProjects(category === "all" ? projects : projects.filter(project => project.category.includes(category)))
            } else {
                setFilteredProjects((category === "all" ? projects : projects.filter(project => project.category.includes(category))).slice(0, 2));
            }
        }
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const cards = scrollRef.current.children;
            if (cards.length === 0) return;

            const cardStyle = window.getComputedStyle(cards[0]);
            const cardWidth = cards[0].offsetWidth + parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);

            scrollRef.current.scrollBy({
                left: direction === 'left' ? -cardWidth : cardWidth,
                behavior: 'smooth',
            });
        }
    };


    const onScroll = () => {
        if (scrollRef.current) {
            const cards = scrollRef.current.children;
            if (cards.length === 0) return;

            const cardStyle = window.getComputedStyle(cards[0]);
            const cardWidth = cards[0].offsetWidth + parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);
            const scrollLeft = scrollRef.current.scrollLeft;
            const index = Math.round(scrollLeft / cardWidth);

            setCurrentIndex(index);
        }
    };


    const handleShowMore = () => {
        setShowMore(!showMore);
        if(showMore) {
            setFilteredProjects(filteredProjects.slice(0, 2));
        } else {
            const newFiltered = filter === "all" ? projects : projects.filter(project => project.category.includes(filter));
            setFilteredProjects(newFiltered);
        }
    }

    useEffect(() => {
            gsap.registerPlugin(ScrollTrigger);
    
            gsap.fromTo("#projects h2",
                { y: -300 },
                {
                    y: 0,
                    scrollTrigger: {
                        trigger: "#projects h2",
                        scrub: true,
                        start: `75% 75%`,
                        end: "75% 25%",
                        pinSpacer: false,
                        once: true,
                    },
                }
            );

            let ctx = gsap.context(() => {
                let mq = gsap.matchMedia();
                mq.add("(max-width: 879px)", () => {
                    setFilteredProjects(filter === "all" ? projects : projects.filter(project => project.category.includes(filter)))
                });

                mq.add("(min-width: 880px)", () => {
                    if (!showMore) {
                        const newFiltered = filter === "all" ? projects : projects.filter(project => project.category.includes(filter));
                        setFilteredProjects(newFiltered.slice(0, 2));                    
                    } else {
                        const newFiltered = filter === "all" ? projects : projects.filter(project => project.category.includes(filter));
                        setFilteredProjects(newFiltered);
                    }
                });

            }, containerRef);
            ScrollTrigger.refresh();

            return () => ctx.revert();
    }, [filter, showMore]);

    return (
        <section id="projects" className='w-full overflow-hidden'>
            <h2 className='text-[clamp(4.5rem,_-0.051rem_+_19.4175vw,_23.25rem)] text-black font-bold font-helvetica uppercase -ml-[clamp(0.375rem,_-0.2318rem_+_2.589vw,_2.875rem)] -mt-[clamp(2rem,_0.1796rem_+_7.767vw,_9.5rem)]'>Projects</h2>
            <ProjectsFilter setFilter={changeFilter} />
            <ul className='flex mt-7 overflow-auto scroll-smooth snap-x snap-mandatory no-scrollbar -ms-overflow-style-none max-[879px]:pr-4 min-[880px]:flex-wrap min-[880px]:gap-[clamp(2rem,_-10rem_+_17.7778vw,_6rem)] min-[880px]:mx-[clamp(1.5rem,_-26.25rem_+_41.1111vw,_10.75rem)] min-[1440px]:w-[1096px] min-[1440px]:mx-auto' ref={scrollRef} onScroll={onScroll}>
                {filteredProjects.map((project, index) => (
                    <ProjectsCard key={index} project={project} shown={index === currentIndex} last={index === filteredProjects.length - 1} />
                ))}
            </ul>
            <button aria-label="Show More or Less" onClick={handleShowMore} className='max-[880px]:hidden mx-auto mt-12 cursor-pointer group flex'>
                <a href={`${showMore ? '#' : '#projects-filter'}`} className={`${showMore ? '' : 'pointer-events-none'} flex items-center gap-2`}>
                    <svg className={`${showMore ? 'rotate-180' : 'rotate-0'}`} width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 1.5L13 15.5L24 1.5" stroke="#6693DE" stroke-width="3" />
                    </svg>
                    <p className='text-[20px] text-blue font-medium duration-100 group-hover:underline underline-offset-4 decoration-3'>{showMore ? 'Show Less' : 'Discover More'}</p>
                </a>
            </button>
            <div className="flex justify-between mx-[clamp(1rem,_-15.625rem_+_50vw,_11.875rem)] mt-8 w-[clamp(21.4375rem,_-2rem_+_100vw,_31.25rem)] min-[880px]:hidden">
                <button aria-label="To the Left Button" onClick={() => scroll('left')} className={`p-3 ${currentIndex === 0 ? "bg-transparent pointer-events-none" : "bg-black"}`}>
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
                <button aria-label="To the Right Button" onClick={() => scroll('right')} className={`p-3 ${currentIndex === filteredProjects.length - 1 ? "bg-transparent pointer-events-none" : "bg-black"}`}>
                    <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28 15.8161L2.79753e-06 -3.8147e-06L0 32L28 15.8161Z" fill="#F2F2F2" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Projects;

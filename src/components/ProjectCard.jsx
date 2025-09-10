import { useState } from "react";

const ProjectsCard = ({ project, shown, last }) => {
    const [open, setOpen] = useState(false);

    return (
        <section className={`${last ? "ml-[clamp(1rem,_-15.625rem_+_50vw,_11.875rem)]" : "ml-[clamp(1rem,_-15.625rem_+_50vw,_11.875rem)]"} mr-[clamp(1rem,_-15.625rem_+_50vw,_11.875rem)] grid min-w-[clamp(21.4375rem,_-2rem_+_100vw,_31.25rem)] max-w-[500px] snap-center min-[880px]:mx-0 min-[880px]:min-w-[0px] min-[880px]:w-[clamp(25rem,_-2.5rem_+_50vw,_31.25rem)]`}>
            <div className="row-1 col-1 font-arial flex flex-col-reverse group">
                <div className="bg-black text-white p-[clamp(0.75rem,_0.5739rem_+_0.7512vw,_1.25rem)] flex flex-col gap-6">
                    <div className="flex flex-col gap-3" >
                        <div className="flex justify-between items-center">
                            <h3 className="text-[clamp(1.25rem,_1.0739rem_+_0.7512vw,_1.75rem)] font-bold font-helvetica">{project.name}</h3>
                            <ul className="flex gap-2">
                                {
                                    project.tools.map((tool, index) => (
                                        <li className="bg-blue h-[clamp(1.5rem,_1.3239rem_+_0.7512vw,_2rem)] w-[clamp(1.5rem,_1.3239rem_+_0.7512vw,_2rem)] p-[clamp(0.125rem,_0.081rem_+_0.1878vw,_0.25rem)]" key={index}><img src={new URL(`../assets/${tool.icon}`, import.meta.url).href} alt={tool.name} /></li>
                                    ))
                                }
                            </ul>
                        </div>
                        <ul className="flex gap-[clamp(0.75rem,_0.662rem_+_0.3756vw,_1rem)]">
                            {
                                project.hashtags.map((hashtag, index) => (
                                    <li className="text-[clamp(0.875rem,_0.743rem_+_0.5634vw,_1.25rem)] opacity-60" key={index}>#{hashtag}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex justify-between items-end text-[clamp(1rem,_0.912rem_+_0.3756vw,_1.25rem)]">
                        <a className={`text-black bg-white px-[clamp(0.75rem,_0.662rem_+_0.3756vw,_1rem)] py-[clamp(0.5rem,_0.412rem_+_0.3756vw,_0.75rem)] duration-100 hover:bg-blue ${project.primary.desktopOnly && window.innerWidth < 880 ? "opacity-50 pointer-events-none" : null}`} href={project.primary.link} target="_blank">{project.primary.desktopOnly && window.innerWidth < 880 ? "Desktop Only" : project.primary.label}</a>
                        <button onClick={() => setOpen(!open)} className="flex items-center gap-2 cursor-pointer duration-100 hover:underline underline-offset-4 decoration-2">
                            <p>Read More</p>
                            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 1L4 1L21.0113 17.9952L18.89 20.1165L1.99902 3L2 2L1.99927 1.00024L3 1Z" fill="#F2F2F2" />
                                <mask id="path-2-inside-1_127_4407" fill="white">
                                    <path d="M2 1.00879H22V21.0088H2V1.00879Z" />
                                </mask>
                                <path d="M22 21.0088V24.0088H25V21.0088H22ZM22 1.00879H19V21.0088H22H25V1.00879H22ZM22 21.0088V18.0088H2V21.0088V24.0088H22V21.0088Z" fill="#F2F2F2" mask="url(#path-2-inside-1_127_4407)" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="grid">
                    <img className={`row-1 col-1 duration-100 group-hover:grayscale-0 z-0 ${ window.innerWidth < 880 && shown ? 'duration-400 grayscale-0' : 'grayscale-100'}`} src={new URL(`../assets/${project.thumbnail}`, import.meta.url).href} alt={project.name} />
                    <ul className="row-1 col-1 flex gap-[clamp(0.5rem,_0.412rem_+_0.3756vw,_0.75rem)] ml-auto mt-[clamp(0.75rem,_0.662rem_+_0.3756vw,_1rem)] mr-[clamp(0.75rem,_0.662rem_+_0.3756vw,_1rem)] z-1">
                        {
                            project.category.map((category, index) => (
                                <li className="bg-blue h-min px-[clamp(0.25rem,_0.162rem_+_0.3756vw,_0.5rem)] py-[clamp(0.125rem,_0.103rem_+_0.0939vw,_0.1875rem)] text-white text-[clamp(0.875rem,_0.831rem_+_0.1878vw,_1rem)]" key={index}>{category}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className={`row-1 col-1 z-900 flex flex-col justify-between overflow-hidden transition-all duration-500 transform origin-top ${open ? "max-h-full scale-y-100" : "max-h-0 scale-y-0"
                } bg-black text-white p-[clamp(0.75rem,_0.5739rem_+_0.7512vw,_1.25rem)]`}>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex flex-row items-center gap-3">
                            <h3 className="text-[clamp(1.25rem,_1.0739rem_+_0.7512vw,_1.75rem)] font-bold font-helvetica">{project.name}</h3>
                            <p className="text-[clamp(0.875rem,_0.831rem_+_0.1878vw,_1rem)] opacity-75 italic">{project.date}</p>
                        </div>
                        <button className="bg-blue p-1.5 z-901 cursor-pointer duration-100 hover:bg-white group" onClick={() => setOpen(!open)}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect className="group-hover:fill-black duration-100" x="3.60547" y="0.968018" width="30.2167" height="3.72445" transform="rotate(45 3.60547 0.968018)" fill="#F2F2F2" />
                                <rect className="group-hover:fill-black duration-100" x="24.9531" y="3.58447" width="30.2167" height="3.66936" transform="rotate(135 24.9531 3.58447)" fill="#F2F2F2" />
                            </svg>
                        </button>
                    </div>
                    {project.colaborators != "none" && (
                        <div className="flex flex-row items-center gap-[clamp(0.5rem,_0.412rem_+_0.3756vw,_0.75rem)]">
                            <h4 className="text-[clamp(0.875rem,_0.787rem_+_0.3756vw,_1.125rem)] opacity-75">Colaborators:</h4>
                            <ul className="flex flex-row gap-[clamp(0.5rem,_0.412rem_+_0.3756vw,_0.75rem)]">
                                {
                                    project.colaborators.map((colaborator, index) => (
                                        <li key={index}><a className="bg-blue h-min px-1 py-0.5 text-white text-[clamp(0.875rem,_0.787rem_+_0.3756vw,_1.125rem)]" href={colaborator.link} target="_blank">{colaborator.name}</a></li>
                                ))
                            }
                            </ul>
                        </div>
                    )}
                    <p className="text-[clamp(1rem,_0.912rem_+_0.3756vw,_1.25rem)]/[120%]">{project.description}</p>
                </div>
                <div className="flex justify-between items-center text-[clamp(1rem,_0.912rem_+_0.3756vw,_1.25rem)]">
                    <a className={`text-black bg-white px-[clamp(0.75rem,_0.662rem_+_0.3756vw,_1rem)] py-[clamp(0.5rem,_0.412rem_+_0.3756vw,_0.75rem)] duration-100 hover:bg-blue ${project.primary.desktopOnly && window.innerWidth < 880 ? "opacity-50 pointer-events-none" : null}`} href={project.primary.link} target="_blank">{project.primary.desktopOnly && window.innerWidth < 880 ? "Desktop Only" : project.primary.label}</a>
                    {project.secondary != "none" && (
                        <a className={`border-white border-2 px-[clamp(0.75rem,_0.662rem_+_0.3756vw,_1rem)] py-[clamp(0.5rem,_0.412rem_+_0.3756vw,_0.75rem)] duration-100 hover:bg-white hover:text-black ${project.secondary.desktopOnly && window.innerWidth < 880 ? "opacity-50 pointer-events-none" : null}`} href={project.secondary.link} target="_blank">{project.secondary.desktopOnly && window.innerWidth < 880 ? "Desktop Only" : project.primary.label}</a>
                        
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectsCard;

import { useState } from "react";

const ProjectsCard = ({ project }) => {
    const [open, setOpen] = useState(false);

    return (
        <section className="mx-4 grid min-w-[343px] max-w-[500px] snap-center" >
            <div className="row-1 col-1 font-arial flex flex-col-reverse">
                <div className="bg-black text-white p-3 flex flex-col gap-6">
                    <div className="flex flex-col gap-3" >
                        <div className="flex justify-between items-center">
                            <h3 className="text-[20px] font-bold font-helvetica">{project.name}</h3>
                            <ul className="flex gap-2">
                                {
                                    project.tools.map((tool, index) => (
                                        <li className="bg-blue h-6 w-6 p-0.5" key={index}><img src={new URL(`../assets/${tool.icon}`, import.meta.url).href} alt={tool.name} /></li>
                                    ))
                                }
                            </ul>
                        </div>
                        <ul className="flex gap-3">
                            {
                                project.hashtags.map((hashtag, index) => (
                                    <li className="text-[14px] opacity-60" key={index}>#{hashtag}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex justify-between items-end text-[16px]">
                        <a className="text-black bg-white px-3 py-2" href={project.primary.link} target="_blank">{project.primary.label}</a>
                        <button onClick={() => setOpen(!open)} className="flex items-center gap-2">
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
                    <img className="row-1 col-1" src={new URL(`../assets/${project.thumbnail}`, import.meta.url).href} alt={project.name} />
                    <ul className="row-1 col-1 flex gap-2 ml-auto mt-3 mr-3">
                        {
                            project.category.map((category, index) => (
                                <li className="bg-blue h-min px-1 py-0.5 text-white text-[14px]" key={index}>{category}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className={`row-1 col-1 z-900 flex flex-col justify-between overflow-hidden transition-all duration-500 transform origin-top ${open ? "max-h-full scale-y-100" : "max-h-0 scale-y-0"
                } bg-black text-white p-4`}>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-row items-center gap-3">
                            <h3 className="text-[20px] font-bold font-helvetica">{project.name}</h3>
                            <p className="text-[14px] opacity-75 italic">{project.date}</p>
                        </div>
                        <button className="bg-blue p-1.5 z-901" onClick={() => setOpen(!open)}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3.60547" y="0.968018" width="30.2167" height="3.72445" transform="rotate(45 3.60547 0.968018)" fill="#F2F2F2" />
                                <rect x="24.9531" y="3.58447" width="30.2167" height="3.66936" transform="rotate(135 24.9531 3.58447)" fill="#F2F2F2" />
                            </svg>
                        </button>
                    </div>
                    {project.colaborators != "none" && (
                        <div className="flex flex-row items-center gap-2">
                            <h4 className="text-[14px] opacity-75">Colaborators:</h4>
                            <ul className="flex flex-row gap-2">
                                {
                                    project.colaborators.map((colaborator, index) => (
                                    <li key={index}><a className="bg-blue h-min px-1 py-0.5 text-white text-[14px]" href={colaborator.link} target="_blank">{colaborator.name}</a></li>
                                ))
                            }
                            </ul>
                        </div>
                    )}
                    <p>{project.description}</p>
                </div>
                <div className="flex justify-between">
                    <a className="text-black bg-white px-3 py-2" href={project.primary.link} target="_blank">{project.primary.label}</a>
                    {project.secondary != "none" && (
                        <a className="border-white border-2 px-3 py-2" href={project.secondary.link} target="_blank">{project.secondary.label}</a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectsCard;

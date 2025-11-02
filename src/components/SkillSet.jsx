import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fonts } from "../data";

const SkillSet = ({ title, tools, skills }) => {
    let heading = null;

    switch (title) {
        case "development":
            heading = <h3 className="dev-title font-helvetica font-bold uppercase text-[clamp(2rem,_0.9437rem_+_4.507vw,_5rem)]">
                {`</${title}>`.split("").map((char, i) => (
                    <span key={i} className="inline-block dev-title-char">{char}</span>
                ))}
            </h3>;
            break;
        case "design":
            heading = <h3 className="design-title h-[clamp(3rem,_1.4155rem_+_6.7606vw,_7.5rem)] font-helvetica font-bold uppercase text-[clamp(2rem,_0.9437rem_+_4.507vw,_5rem)]">
                {title.split("").map((char, i) => (
                    <span key={i} className="inline-block design-title-char">{char}</span>
                ))}
                </h3>;
            break;
        case "motion":
            heading = <h3 className="font-helvetica font-bold uppercase text-[clamp(2rem,_0.9437rem_+_4.507vw,_5rem)]">{title}</h3>;
            break;
        case "ux":
            heading = <h3 className="font-helvetica font-bold uppercase text-[clamp(2rem,_0.9437rem_+_4.507vw,_5rem)]">{title}</h3>;
            break;

        default:
            break;
    }

    const [showMore, setShowMore] = useState(false);
    const [displayedSkills, setDisplayedSkills] = useState(skills.slice(0, 12));

    const handleClickShowMore = () => {
        setShowMore(!showMore);
        if (showMore) {
            setDisplayedSkills(skills.slice(0, 12));
        } else {
            setDisplayedSkills(skills);
        }
    };

    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
            let mq = gsap.matchMedia();

            mq.add("(min-width: 1160px)", () => {
                gsap.fromTo(`h3`,
                    { x: "-300%" },
                    {
                        x: 0,
                        duration: 1.5,
                        ease: "power3.out",
                        stagger: 0.08,
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 100%",
                            toggleActions: "play none none none",
                        }
                    }
                );

                gsap.fromTo(`button`,
                    { x: "-300%" },
                    {
                        x: 0,
                        duration: 1.5,
                        ease: "power3.out",
                        stagger: 0.08,
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 100%",
                            toggleActions: "play none none none",
                        }
                    }
                );

                if(title === "development"){
                    gsap.fromTo(".dev-title-char",
                        { opacity: 0 },
                        {
                            opacity: 1,
                            duration: 0.2,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: ".dev-title",
                                start: `50% 90%`,
                                end: "bottom top",
                            },
                            stagger: 0.2
                        }
                    );
                }

                const toolsEl = containerRef.current?.querySelectorAll(`.tools-${title} li`);
                if(toolsEl && toolsEl.length > 0){
                    gsap.fromTo(`.tools-${title} li`,
                        { x: "1300%" },
                        {
                            x: 0,
                            duration: 1.5,
                            ease: "power3.out",
                            stagger: 0.08,
                            scrollTrigger: {
                                trigger: containerRef.current,
                                start: "top 70%",
                                toggleActions: "play none none none",
                            }
                        }
                    );
                }
                
                const skillsEl = containerRef.current?.querySelectorAll(`.skills-${title} li`);
                if (skillsEl && skillsEl.length > 0) {
                    gsap.fromTo(skillsEl, { x: "1300%" }, {
                        x: 0,
                        duration: 1.5,
                        ease: "power3.out",
                        stagger: 0.08,
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        }
                    });
                }

                if(title === "ux"){
                    const uxBtn = containerRef.current?.querySelector("button");
                    if (uxBtn) {
                        gsap.fromTo(uxBtn,
                            { y: "1200%" },
                            {
                                y: 0,
                                duration: 1.5,
                                ease: "power3.out",
                                scrollTrigger: {
                                    trigger: containerRef.current,
                                    start: "top 80%",
                                    toggleActions: "play none none none",
                                }
                            }
                        );
                    }
                }

            });

            ScrollTrigger.refresh();
        }, containerRef);
        
        if (title === "design") {
            const letters = gsap.utils.toArray(".design-title-char");
            gsap.to({}, {
                duration: 0.2,
                repeatDelay: 2,
                repeat: -1,
                onRepeat: () => {
                    letters.forEach((letter) => {
                        letter.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)]
                    })
                }
            })
        }
        return () => ctx.revert();
    }, []);

    return (
        <li className={`skill-set-${title} px-[clamp(0.875rem,_-0.1373rem_+_4.3192vw,_3.75rem)] flex flex-col gap-7`} ref={containerRef}>
            {heading}
            <ul className={`tools-${title} flex flex-wrap gap-[clamp(0.375rem,_0.287rem_+_0.3756vw,_0.625rem)]`}>
                {tools.map((tool, index) => (
                    <li key={index} className="group grid bg-blue w-[clamp(4rem,_2.5915rem_+_6.0094vw,_8rem)] h-[clamp(4rem,_2.5915rem_+_6.0094vw,_8rem)] p-[clamp(0.375rem,_0.243rem_+_0.5634vw,_0.75rem)]">
                        <h4 className="max-[1000px]:hidden row-1 col-1 opacity-0 relative z-50 w-full h-full flex justify-center items-center py-auto bg-black font-helvetica font-bold text-center text-[16px]/[110%] break-words group-hover:opacity-100 duration-100 group-hover:delay-500">{tool.name}</h4>
                        {tool.icon ? <img className="row-1 col-1" src={new URL(`../assets/${tool.icon}`, import.meta.url).href} alt={tool.name} />: null}
                    </li>
                ))}
            </ul>
            <ul className={`skills-${title} flex flex-wrap gap-[clamp(0.5rem,_0.456rem_+_0.1878vw,_0.625rem)]`}>
                {displayedSkills.map((skill, index) => (
                    <li key={index} className="bg-[#1D1D1D] w-max px-[clamp(0.5rem,_0.3239rem_+_0.7512vw,_1rem)] py-[clamp(0.25rem,_0.162rem_+_0.3756vw,_0.5rem)] text-[clamp(1.125rem,_0.993rem_+_0.5634vw,_1.5rem)]">{skill}</li>
                ))}
            </ul>
            {
                skills.length > 12 ? <button onClick={handleClickShowMore} className='flex items-center gap-2 group w-max mx-auto'>
                    <svg className={`${showMore ? 'rotate-180' : 'rotate-0'}`} width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 1.5L13 15.5L24 1.5" stroke="#6693DE" stroke-width="3" />
                    </svg>
                    <p className='text-[20px] text-blue font-medium duration-100 group-hover:underline underline-offset-4 decoration-3'>{showMore ? 'Show Less' : 'Discover More'}</p>
                </button> : null
            }
        </li>
    );
};

export default SkillSet;

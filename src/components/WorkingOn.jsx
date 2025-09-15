import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tailwindCssLogo from "../assets/tailwindcss.png";

const WorkingOn = ({ }) => {
    const containerRef = useRef(null);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);


        let ctx = gsap.context(() => {
            let mq = gsap.matchMedia();

            mq.add("(min-width: 1160px)", () => {
                gsap.set("#working-on h2", { y: -75, opacity: 0 });
                gsap.set("#working-on .info", { y: 75, opacity: 0 });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 50%",
                        end: "60% 60%",
                        scrub: 0.5,
                        once: true,
                    },
                });

                tl.fromTo(
                    "#working-on .line",
                    { scaleX: 0, transformOrigin: "left center" },
                    { scaleX: 1, duration: 1 }
                );

                tl.to(
                    "#working-on h2",
                    { y: 0, opacity: 1 },
                    "+=0.2"
                );
                tl.to(
                    "#working-on .info",
                    { y: 0, opacity: 1, },
                    "<"
                );

            });

            ScrollTrigger.refresh();
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-black">
            <section ref={containerRef} id="working-on" className="flex flex-col-reverse px-[clamp(1rem,_0.0317rem_+_4.1315vw,_3.75rem)] mt-[104px] pt-24 pb-24 min-[1440px]:w-[1360px] min-[1440px]:mx-auto bg-black">
                <h2 className="font-helvetica text-[clamp(3rem,_0.5352rem_+_10.5164vw,_10rem)] font-bold uppercase -mb-4 pt-[clamp(0rem,_0.6761rem_+_-0.7512vw,_0.5rem)] text-white">Working On</h2>
                <div className="line h-[clamp(0.5rem,_0.412rem_+_0.3756vw,_0.75rem)] w-[95%] bg-white"></div>
                <div className="info grid grid-cols-[max-content_1fr] grid-rows-[max-content_1fr] gap-y-[clamp(1.75rem,_1.662rem_+_0.3756vw,_2rem)] gap-x-[clamp(1rem,_0.2077rem_+_3.3803vw,_3.25rem)] pb-[clamp(2.5rem,_1.6197rem_+_3.7559vw,_5rem)] text-white">
                    <h3 className="row-1 col-2 font-helvetica text-[clamp(2rem,_1.6479rem_+_1.5023vw,_3rem)]/[120%] font-bold uppercase w-min my-auto md:w-max">Learning TailwindCSS</h3>
                    <div className="row-2 col-start-1 col-span-2 font-arial flex flex-col gap-5 md:col-2">
                        <p className="text-[clamp(1.125rem,_0.9049rem_+_0.939vw,_1.75rem)]/[120%]">While working on other projects, I noticed I was losing a lot of time styling the pages with CSS. I found this frustrating, so I started looking for a solution, “Tailwind CSS.”</p>
                        <p className="opacity-60 text-[clamp(1rem,_0.8239rem_+_0.7512vw,_1.5rem)]/[120%]">(This is the first project where I’m using Tailwind CSS.)</p>
                    </div>
                    <img className="w-[clamp(5.5rem,_0.3944rem_+_21.784vw,_20rem)] h-auto max-w-none self-center md:row-start-1 md:row-span-2 md:my-auto" src={tailwindCssLogo} alt="TailwindCSS Logo" />
                </div>
            </section>
        </div>
    );
};

export default WorkingOn;

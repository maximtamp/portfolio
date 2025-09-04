import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import photoMe from "../assets/photo-me.png";

const AboutMe = () => {
    const containerRef = useRef(null);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        let ctx = gsap.context(() => {
            const container = containerRef.current;
            let mq = gsap.matchMedia();
            mq.add("(max-width: 1159px)", () => {
                const info = container.querySelector(".info");

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        scrub: 0.3,
                        pin: container,
                        anticipatePin: 1,
                        start: "top top",
                        end: () => "+=" + (info.scrollWidth - container.offsetWidth +32),
                        invalidateOnRefresh: true,
                    },
                });

               
                tl.to(info, {
                    x: -(info.scrollWidth - container.offsetWidth +32),
                    ease: "none"
                });

                gsap.from(container.querySelector("h2"), {
                    x: -350,
                    scrollTrigger: {
                        trigger: container,
                        start: "top 75%",
                        end: "75% bottom",
                        scrub: true,
                        markers: true,
                    }
                });

           
            });

            mq.add("(min-width: 1160px)", () => {
                const tl = gsap.timeline();

                tl.from("h2", {
                    x: "75%",
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top-=100 75%",
                        end: "40% bottom",
                        scrub: true,
                        once: true,
                        invalidateOnRefresh: true,
                    }
                });
                tl.from(".nationality-box", {
                    x: "-300%",
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 70%",
                        end: "30% 70%",
                        scrub: true,
                        once: true,
                    }
                });
                tl.from(".age-box", {
                    y: "300%",
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 70%",
                        end: "40% 70%",
                        scrub: true,
                        once: true,
                    }
                });
                tl.from(".image-box", {
                    x: "300%",
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 65%",
                        end: "50% 70%",
                        scrub: true,
                        once: true,
                    }
                });
                tl.from(".languages-box", {
                    x: "-400%",
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 55%",
                        end: "55% 70%",
                        scrub: true,
                        once: true,
                    }
                });
                gsap.from(".lang-bar.dutch", {
                        width: "0%",
                        duration: 1.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".languages-box",
                            start: "top center",
                            toggleActions: "play none none reverse",
                            once: true,
                        }
                    }
                );
                gsap.from(".lang-bar.english",{
                        width: "0%",
                        duration: 1.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".languages-box",
                            start: "top center",
                            toggleActions: "play none none reverse",
                            once: true,

                        }
                    }
                );
                tl.from(".hobbies-box", {
                    x: "200%",
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "20% 60%",
                        end: "90% 80%",
                        scrub: true,
                        once: true,
                    }
                });
                tl.from(".education-box.secondary", {
                    x: "-400%",
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "30% 40%",
                        end: "bottom 80%",
                        scrub: true,
                        once: true,
                        markers: true,
                    }
                });
                tl.from(".education-box.bachelor", {
                    x: "400%",
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "30% 40%",
                        end: "bottom 80%",
                        scrub: true,
                        once: true,
                    }
                });

            });

            ScrollTrigger.refresh();
        }, containerRef);

        return () => ctx.revert();
    }, []);




    return (
        <section id="about-me" className="px-4 mt-10 pb-25 pt-15 w-screen min-h-[100vh] h-screen min-[1160px]:h-auto min-[1160px]:w-min mx-auto" ref={containerRef}>
            <h2 className="font-helvetica text-[clamp(6.25rem,_2.7289rem_+_15.0235vw,_16.25rem)] font-bold uppercase -mb-4 min-[1160px]:text-right min-[1160px]:-mb-[clamp(6rem,_1.8571rem_+_5.7143vw,_7rem)] min-[1160px]:-mr-[clamp(1.5rem,_-0.5714rem_+_2.8571vw,_2rem)]">Me</h2>
            <div className="">
                <ul className="info grid grid-cols-[repeat(10,_clamp(10rem,_9.1197rem_+_3.7559vw,_12.5rem))] grid-rows-[repeat(2,_clamp(10rem,_9.1197rem_+_3.7559vw,_12.5rem))] gap-[clamp(1.5rem,_1.1479rem_+_1.5023vw,_2.5rem)] min-[1160px]:grid-cols-[repeat(5,_clamp(10rem,_9.1197rem_+_3.7559vw,_12.5rem))] min-[1160px]:grid-rows-[repeat(5,_clamp(10rem,_9.1197rem_+_3.7559vw,_12.5rem))]">
                    <li className="age-box w-[clamp(10rem,_9.1197rem_+_3.7559vw,_12.5rem)] h-[clamp(10rem,_9.1197rem_+_3.7559vw,_12.5rem)] bg-blue text-white flex flex-col-reverse justify-center items-center min-[1160px]:col-3 min-[1160px]:row-1">
                        <h3 className="font-arial text-[clamp(1.125rem,_0.993rem_+_0.5634vw,_1.5rem)] opacity-80 -mt-[clamp(0.75rem,_0.4859rem_+_1.1268vw,_1.5rem)]">Age</h3>
                        <p className="font-helvetica text-[clamp(3.5rem,_2.9718rem_+_2.2535vw,_5rem)] font-bold">20</p>
                    </li>
                    <li className="nationality-box w-[clamp(21.5rem,_19.3873rem_+_9.0141vw,_27.5rem)] h-[clamp(10rem,_9.1197rem_+_3.7559vw,_12.5rem)] row-2 col-start-1 col-end-2 text-black border-8 flex flex-col-reverse justify-center items-center mt-auto min-[1160px]:row-1 min-[1160px]:col-start-1 min-[1160px]:col-end-2">
                        <h3 className="font-arial text-[clamp(1.125rem,_0.993rem_+_0.5634vw,_1.5rem)] opacity-80 -mt-[clamp(0.75rem,_0.4859rem_+_1.1268vw,_1.5rem)]">Nationality</h3>
                        <p className="font-helvetica text-[clamp(3.5rem,_2.9718rem_+_2.2535vw,_5rem)] font-bold">Belgian</p>
                    </li>
                    <li className="image-box w-[clamp(21.5rem,_19.3873rem_+_9.0141vw,_27.5rem)] h-[clamp(21.5rem,_19.3873rem_+_9.0141vw,_27.5rem)] row-start-1 row-end-2 col-start-4 col-end-5">
                        <h3 className="visually-hidden">Picture</h3>
                        <img src={photoMe} alt="" />
                    </li>
                    <li className="languages-box w-[clamp(21.5rem,_19.3873rem_+_9.0141vw,_27.5rem)] h-[clamp(10rem,_9.1197rem_+_3.7559vw,_12.5rem)] row-1 col-start-2 col-end-3 bg-black text-white flex flex-col-reverse justify-center items-center pt-3 min-[1160px]:row-2">
                        <h3 className="font-arial text-[clamp(1.125rem,_0.993rem_+_0.5634vw,_1.5rem)] opacity-80 mt-1">Languages</h3>
                        <ul className="flex flex-col items-end">
                            <li className="flex flex-row items-center gap-3">
                                <h4 className="font-arial text-[clamp(1.25rem,_1.0739rem_+_0.7512vw,_1.75rem)]">Dutch</h4>
                                <div className="h-[clamp(1rem,_0.912rem_+_0.3756vw,_1.25rem)] w-[clamp(10rem,_9.1197rem_+_3.7559vw,_12.5rem)] bg-[#474747]">
                                    <div className="lang-bar dutch h-full bg-white w-[95%]"></div>
                                </div>
                            </li>
                            <li className="flex flex-row items-center gap-3">
                                <h4 className="font-arial text-[clamp(1.25rem,_1.0739rem_+_0.7512vw,_1.75rem)]">English</h4>
                                <div className="h-[clamp(1rem,_0.912rem_+_0.3756vw,_1.25rem)] w-[clamp(10rem,_9.1197rem_+_3.7559vw,_12.5rem)] bg-[#474747]">
                                    <div className="lang-bar english h-full bg-white w-[75%]"></div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="hobbies-box w-[clamp(10rem,_9.1197rem_+_3.7559vw,_12.5rem)] h-[clamp(21.5rem,_19.3873rem_+_9.0141vw,_27.5rem)] row-start-1 row-end-2 col-6 border-8 border-blue flex justify-center min-[1160px]:row-3 min-[1160px]:col-start-1 min-[1160px]:col-end-3 min-[1160px]:w-[clamp(33rem,_24.3732rem_+_36.8075vw,_57.5rem)] min-[1160px]:h-[clamp(10rem,_9.1197rem_+_3.7559vw,_12.5rem)]">
                        <h3 className="visually-hidden">Hobbies</h3>
                        <ul className="text-blue flex flex-col justify-center items-center gap-14 min-[1160px]:flex-row min-[1160px]:gap-24">
                            <li className="flex flex-row-reverse items-center gap-[clamp(0.75rem,_0.4859rem_+_1.1268vw,_1.5rem)]">
                                <h4 className="font-arial text-[clamp(1rem,_0.8239rem_+_0.7512vw,_1.5rem)]">Running</h4>
                                <div className="h-[clamp(2.5rem,_1.9718rem_+_2.2535vw,_4rem)] w-[clamp(2.5rem,_1.9718rem_+_2.2535vw,_4rem)] p-[clamp(0.375rem,_0.287rem_+_0.3756vw,_0.625rem)] bg-blue">
                                    <svg className="w-full h-full" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.7792 32.8796L22.9467 11.8466L16.7792 12.6497L12.2716 22.0792L8.79949 20.7223L14.3731 9.83885L25.5203 7.8311L31.901 8.88344L38.0381 13.6467L46.033 6.69568L48.5 9.10498L38.0381 18.0222L31.901 13.6467L27.4848 24.3916L38.3883 30.9272L40.0482 47.5847L35.5102 48L33.9112 33.6965L23.9822 29.3072L20.8147 37.6151L0.5 35.455L0.972081 31.5918L16.7792 32.8796Z" fill="#F2F2F2" />
                                        <rect width="7.28982" height="6.6681" transform="matrix(0.986921 0.161205 -0.193824 0.981036 26.7402 0)" fill="#F2F2F2" />
                                    </svg>
                                </div>
                            </li>
                            <li className="flex flex-row-reverse items-center gap-[clamp(0.75rem,_0.4859rem_+_1.1268vw,_1.5rem)]">
                                <h4 className="font-arial text-[clamp(1rem,_0.8239rem_+_0.7512vw,_1.5rem)]">Fitness</h4>
                                <div className="h-[clamp(2.5rem,_1.9718rem_+_2.2535vw,_4rem)] w-[clamp(2.5rem,_1.9718rem_+_2.2535vw,_4rem)] p-[clamp(0.125rem,_0.081rem_+_0.1878vw,_0.25rem)] bg-blue">
                                    <svg className="w-full h-full" width="57" height="58" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="7.6582" y="33.1688" width="5.8947" height="23.5776" transform="rotate(-45 7.6582 33.1688)" fill="#F2F2F2" />
                                        <rect x="49.3418" y="24.8311" width="5.8947" height="23.5776" transform="rotate(135 49.3418 24.8311)" fill="#F2F2F2" />
                                        <rect x="5.57617" y="41.505" width="5.8947" height="14.736" transform="rotate(-45 5.57617 41.505)" fill="#F2F2F2" />
                                        <rect x="51.4258" y="16.4952" width="5.8947" height="14.736" transform="rotate(135 51.4258 16.4952)" fill="#F2F2F2" />
                                        <rect x="7.13867" y="47.236" width="1.47367" height="4.42079" transform="rotate(-45 7.13867 47.236)" fill="#F2F2F2" />
                                        <rect x="49.8613" y="10.7643" width="1.47367" height="4.42079" transform="rotate(135 49.8613 10.7643)" fill="#F2F2F2" />
                                        <rect x="37.3574" y="23.269" width="20.6314" height="4.42079" transform="rotate(135 37.3574 23.269)" fill="#F2F2F2" />
                                    </svg>
                                </div>
                            </li>
                            <li className="flex flex-row-reverse items-center gap-[clamp(0.75rem,_0.4859rem_+_1.1268vw,_1.5rem)]">
                                <h4 className="font-arial text-[clamp(1rem,_0.8239rem_+_0.7512vw,_1.5rem)]">Gaming</h4>
                                <div className="h-[clamp(2.5rem,_1.9718rem_+_2.2535vw,_4rem)] w-[clamp(2.5rem,_1.9718rem_+_2.2535vw,_4rem)] p-[clamp(0.375rem,_0.287rem_+_0.3756vw,_0.625rem)] bg-blue">
                                    <svg className="w-full h-full" width="49" height="46" viewBox="0 0 49 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.3184 10.3281L42.5061 7.24835L48.4994 38.7514L36.469 41.0403L26.3184 10.3281Z" fill="#F2F2F2" />
                                        <path d="M42.5039 7.24875L6.49249 7.24828L0.499185 38.7514L12.5296 41.0402L17.605 25.6841L42.5039 7.24875Z" fill="#F2F2F2" />
                                        <rect x="7.77734" y="7.26355" width="33.7219" height="20.9271" fill="#F2F2F2" />
                                        <ellipse cx="14.2574" cy="17.6948" rx="5.18319" ry="5.18319" fill="#6693DE" />
                                        <ellipse cx="33.9854" cy="13.5481" rx="2.07328" ry="2.07328" fill="#6693DE" />
                                        <ellipse cx="38.1318" cy="17.6947" rx="2.07328" ry="2.07328" transform="rotate(90 38.1318 17.6947)" fill="#6693DE" />
                                        <ellipse cx="33.9854" cy="21.8412" rx="2.07328" ry="2.07328" fill="#6693DE" />
                                        <ellipse cx="29.8388" cy="17.6947" rx="2.07328" ry="2.07328" transform="rotate(90 29.8388 17.6947)" fill="#6693DE" />
                                        <circle cx="14.258" cy="17.6947" r="3.04512" fill="#F2F2F2" />
                                    </svg>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="w-[clamp(44.375rem,_34.4718rem_+_42.2535vw,_72.5rem)] row-start-1 row-end-2 col-start-7 col-end-10 min-[1160px]:row-start-4 min-[1160px]:row-end-5 min-[1160px]:col-start-1 min-[1160px]:col-end-6 min-[1160px]:w-full">
                        <h3 className="visually-hidden">Education</h3>
                        <ul className="flex gap-[clamp(1.5rem,_1.1479rem_+_1.5023vw,_2.5rem)] min-[1160px]:grid min-[1160px]:grid-cols-2 min-[1160px]:w-full">
                            <li className="education-box secondary w-[clamp(21.375rem,_16.5775rem_+_20.4695vw,_35rem)] h-[clamp(21.5rem,_19.3873rem_+_9.0141vw,_27.5rem)] flex flex-col justify-between bg-black p-[clamp(2rem,_1.2958rem_+_3.0047vw,_4rem)] text-white font-arial min-[1160px]:w-full">
                                <div className="flex flex-col gap-[clamp(1rem,_0.8239rem_+_0.7512vw,_1.5rem)]">
                                    <div className="flex flex-col gap-2">
                                        <div>
                                            <h4 className="font-helvetica text-[clamp(1.5rem,_1.412rem_+_0.3756vw,_1.75rem)]/[110%] font-bold">Electricity-Electronics</h4>
                                            <p className="text-[clamp(1rem,_0.912rem_+_0.3756vw,_1.25rem)] italic opacity-60">Secondary school Diploma</p>
                                        </div>
                                        <p className="text-[clamp(1.125rem,_0.993rem_+_0.5634vw,_1.5rem)]">Sep 2019 - Jun 2023</p>
                                    </div>
                                    <p className="text-[clamp(1.125rem,_0.993rem_+_0.5634vw,_1.5rem)]/[120%]">Learned various electronic calculations and gained a solid understanding of electronic components. I also learned how to program them using Arduino.</p>
                                </div>
                                <div className="flex items-center gap-3 opacity-75">
                                    <svg className="h-[clamp(1.25rem,_0.9859rem_+_1.1268vw,_2rem)] w-auto" width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 12 32 12 32C12 32 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z" fill="#F2F2F2" />
                                    </svg>
                                    <p className="text-[clamp(1.125rem,_0.993rem_+_0.5634vw,_1.5rem)]">VTI Tielt, Tielt, Belgium</p>
                                </div>
                            </li>
                            <li className="education-box bachelor w-[clamp(21.375rem,_16.5775rem_+_20.4695vw,_35rem)] h-[clamp(21.5rem,_19.3873rem_+_9.0141vw,_27.5rem)] flex flex-col justify-between bg-black p-[clamp(2rem,_1.2958rem_+_3.0047vw,_4rem)] text-white min-[1160px]:w-full">
                                <div className="flex flex-col gap-[clamp(1rem,_0.8239rem_+_0.7512vw,_1.5rem)]">
                                    <div className="flex flex-col gap-2">
                                        <div>
                                            <h4 className="font-helvetica text-[clamp(1.5rem,_1.412rem_+_0.3756vw,_1.75rem)]/[110%] font-bold">Digital Design and Development</h4>
                                            <p className="text-[clamp(1rem,_0.912rem_+_0.3756vw,_1.25rem)] italic opacity-60">Bachelor Diploma</p>
                                        </div>
                                        <p className="text-[clamp(1.125rem,_0.993rem_+_0.5634vw,_1.5rem)]">Sep 2023 - ...</p>
                                    </div>
                                    <p className="text-[clamp(1.125rem,_0.993rem_+_0.5634vw,_1.5rem)]/[120%]">Learned to design and develop user-friendly web applications using UX/UI principles and technologies like HTML, CSS, JavaScript, ...</p>
                                </div>
                                <div className="flex items-center gap-3 opacity-75">
                                    <svg className="h-[clamp(1.25rem,_0.9859rem_+_1.1268vw,_2rem)] w-auto" width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 12 32 12 32C12 32 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z" fill="#F2F2F2" />
                                    </svg>
                                    <p className="text-[clamp(1.125rem,_0.993rem_+_0.5634vw,_1.5rem)]">Howest, Kortrijk, Belgium</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default AboutMe;

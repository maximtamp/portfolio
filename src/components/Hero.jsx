import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".hero-char", {
            y: () => gsap.utils.random(-200, -700),
            x: () => gsap.utils.random(-150, 500),
            rotate: () => gsap.utils.random(-90, 90),
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#hero",
                start: `bottom ${window.innerWidth > 640 ? "bottom" : "85%"}`,
                end: "bottom top",
                scrub: true,
            },
        });
    }, []);

    return (
        <section id="hero" className="p-[clamp(1rem,_0.0317rem_+_4.1315vw,_3.75rem)]">
            <h2 className="font-helvetica text-black font-bold text-[clamp(3.75rem,_1.9894rem_+_7.5117vw,_8.75rem)] flex flex-col -mb-[clamp(0rem,_-0.3521rem_+_1.5023vw,_1rem)]">
                <span className="-mb-[clamp(2rem,_1.1637rem_+_3.5681vw,_4.375rem)]">
                    {`<Maxim>`.split("").map((char, i) => (
                        <span key={i} className="inline-block hero-char">{char}</span>
                    ))}
                </span>
                <span>
                    {`</Tampere>`.split("").map((char, i) => (
                        <span key={i} className="inline-block hero-char">{char}</span>
                    ))}
                </span>
            </h2>
            <p className="font-arial text-black text-[clamp(1.25rem,_-0.1786rem_+_2.9762vw,_2.5rem)]/[120%] max-w-[600px] opacity-75">
                {"Crafting digital experiences with design, code, and curiosity.".split(" ").map((word, i) => (
                    <span key={i} className="hero-word" style={{ display: "inline-flex", marginRight: "0.25em" }}>
                        {word.split("").map((char, j) => (
                            <span key={j} className="inline-block hero-char">{char}</span>
                        ))}
                    </span>
                ))}
            </p>
        </section>
    );
};

export default Hero;
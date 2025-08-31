const Footer = () => {
    return (
        <footer className="bg-black text-white font-arial text-[clamp(1rem,_0.8916rem_+_0.4624vw,_1.25rem)] py-5 px-[clamp(1rem,_0.0317rem_+_4.1315vw,_3.75rem)]">
            <h2 className="visually-hidden">Footer</h2>
            <div className="grid grid-cols-[max-content,_1fr] grid-rows-[max-content,_1fr] sm:gap-4 min-[1000px]:flex min-[1000px]:gap-0">
                <p className="font-helvetica text-[clamp(1.5rem,_1.412rem_+_0.3756vw,_1.75rem)] font-bold sm:row-1 sm:col-1 min-[1000px]:w-fit">MaximTamp.</p>
                <ul className="col-2 row-start-1 row-span-2 flex flex-col gap-5 items-end sm:row-start-1 sm:row-span-1 sm:col-start-1 sm:-col-span-2 sm:flex-row sm:justify-end min-[1000px]:flex-row min-[1000px]:gap-[clamp(0.75rem,_-2.9643rem_+_7.7381vw,_4rem)] min-[1000px]:items-center min-[1000px]:ml-[clamp(0rem,_-1.4085rem_+_6.0094vw,_4rem)]">
                    <li><a href="#about-me" className="hover:text-blue">About Me</a></li>
                    <li><a href="#skills" className="hover:text-blue">Skills</a></li>
                    <li><a href="#projects" className="hover:text-blue">Projects</a></li>
                    <li><a href="#working-on" className="hover:text-blue">Working On</a></li>
                </ul>
                <ul className="font-bold text-blue flex flex-col gap-3 mt-auto sm:row-start-2 sm:-row-span-1 sm:col-start-1 sm:-col-span-2 sm:flex-row sm:gap-6 min-[1000px]:flex-row min-[1000px]:gap-5 min-[1000px]:items-center min-[1000px]:my-auto min-[1000px]:ml-auto">
                    <li><a href="mailto:maxim.tampere@gmail.com" className="hover:text-white">Contact</a></li>
                    <li><a href="https://www.linkedin.com/in/maxim-tampere-669460323/" className="hover:text-white">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/maximtamp/" className="hover:text-white">Instagram</a></li>
                </ul>
            </div>
            <div className="text-[clamp(0.75rem,_0.662rem_+_0.3756vw,_1rem)] opacity-50 flex justify-between mt-14 min-[1000px]:mt-8">
                <p>By MaximTamp.</p>
                <p>Updated August 30 2025</p>
            </div>
        </footer>
    );
};

export default Footer;

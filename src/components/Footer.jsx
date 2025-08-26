const Footer = () => {
    return (
        <footer className="bg-black text-white font-arial text-[clamp(1rem,_0.8916rem_+_0.4624vw,_1.25rem)] py-5 px-[clamp(1rem,_0.0317rem_+_4.1315vw,_3.75rem)]">
            <h2 className="visually-hidden">Footer</h2>
            <div className="grid grid-cols-[max-content, 1fr] grid-rows-[max-content, 1fr] md:flex">
                <p className="font-helvetica text-[clamp(1.5rem,_1.412rem_+_0.3756vw,_1.75rem)] font-bold md:w-fit">MaximTamp.</p>
                <ul className="col-2 row-start-1 row-span-2 flex flex-col gap-5 items-end md:flex-row md:gap-[clamp(0.75rem,_-2.9643rem_+_7.7381vw,_4rem)] md:items-center md:ml-[clamp(0rem,_-1.4085rem_+_6.0094vw,_4rem)]">
                    <li><a href="#about-me" className="md:hover:text-blue">About Me</a></li>
                    <li><a href="#skills" className="md:hover:text-blue">Skills</a></li>
                    <li><a href="#projects" className="md:hover:text-blue">Projects</a></li>
                    <li><a href="#working-on" className="md:hover:text-blue">Working On</a></li>
                </ul>
                <ul className="font-bold text-blue flex flex-col gap-5 mt-auto md:flex-row md:gap-5 md:items-center md:my-auto md:ml-auto">
                    <li><a href="https://www.linkedin.com/in/maxim-tampere-669460323/" className="md:hover:text-white">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/maximtamp/" className="md:hover:text-white">Instagram</a></li>
                </ul>
            </div>
            <div className="text-[clamp(0.75rem,_0.662rem_+_0.3756vw,_1rem)] opacity-50 flex justify-between mt-14 md:mt-8">
                <p>By MaximTamp.</p>
                <p>Updated August 30 2025</p>
            </div>
        </footer>
    );
};

export default Footer;

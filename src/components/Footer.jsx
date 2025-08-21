const Footer = () => {
    return (
        <footer className="bg-black text-white font-arial text-[16px] p-5">
            <h2 className="visually-hidden">Footer</h2>
            <div className="grid grid-cols-[max-content, 1fr] grid-rows-[max-content, 1fr]">
                <p className="font-helvetica text-[24px] font-bold">MaximTamp.</p>
                <ul className="col-2 row-start-1 row-span-2 flex flex-col gap-5 items-end">
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#working-on">Working On</a></li>
                </ul>
                <ul className="font-bold text-blue flex flex-col gap-5 mt-auto">
                    <li><a href="https://www.linkedin.com/in/maxim-tampere-669460323/">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/maximtamp/">Instagram</a></li>
                </ul>
            </div>
            <div className="text-[12px] opacity-50 flex justify-between mt-14">
                <p>By MaximTamp.</p>
                <p>Updated August 30 2025</p>
            </div>
        </footer>
    );
};

export default Footer;

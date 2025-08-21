import { useState } from "react";

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <nav className="flex justify-between items-center p-4">
                <h2 className="font-helvetica text-black font-bold text-[24px]">MaximTamp.</h2>
                <ul className={`${!open ? "visually-hidden" : ""} flex flex-col items-end gap-2 absolute top-14 right-0 p-4 `}>
                    <li className={`transform transition-all duration-500 delay-0 ${open ? "translate-x-0" : "translate-x-50"}`}>
                        <a onClick={() => setOpen(!open)} className="bg-blue text-white text-[18px] px-1.5 py-1" href="#about-me">About Me</a>
                    </li>
                    <li className={`transform transition-all duration-500 delay-100 ${open ? "translate-x-0" : "translate-x-50"}`}>
                        <a onClick={() => setOpen(!open)} className="bg-blue text-white text-[18px] px-1.5 py-1" href="#skills">Skills</a>
                    </li>
                    <li className={`transform transition-all duration-500 delay-200 ${open ? "translate-x-0" : "translate-x-50"}`}>
                        <a onClick={() => setOpen(!open)} className="bg-blue text-white text-[18px] px-1.5 py-1" href="#projects">Projects</a>
                    </li>
                    <li className={`transform transition-all duration-500 delay-300 ${open ? "translate-x-0" : "translate-x-50"}`}>
                        <a onClick={() => setOpen(!open)} className="bg-blue text-white text-[18px] px-1.5 py-1" href="#working-on">Working On</a>
                    </li>
                </ul>
                <button onClick={() => setOpen(!open)} className="relative w-7 h-6 flex flex-col justify-between items-center gap-1" >
                    <span className={`block h-1 w-full bg-black transition-transform duration-200 ${open ? "rotate-45 translate-y-2.5" : "" }`}/>
                    <span className={`block h-1 w-full bg-black transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100" }`}/>
                    <span className={`block h-1 w-full bg-black transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </button>
            </nav>
        </header>
    );
};

export default Nav;

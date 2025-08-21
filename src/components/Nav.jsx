const Nav = ({ onTop, open, setOpen }) => {

    const handleClickNav = () => {
        setOpen(!open);
    }

    return (
        <header>
            <nav className="flex justify-between items-center p-4">
                <h2 className="font-helvetica text-black font-bold text-[24px]">MaximTamp.</h2>
                <div className={onTop ? null :`fixed top-3 right-2 z-1000`}>
                    <ul className={`${onTop ? "" : "-mr-4 -mt-2"} flex flex-col items-end gap-2 absolute top-14 right-0 p-4 overflow-hidden`}>
                        <li className={`w-max transform transition-all duration-500 ${open ? "delay-0 translate-x-0" : "delay-300 translate-x-50"}`}>
                            <a onClick={handleClickNav} className="bg-blue text-white text-[18px] px-1.5 py-1" href="#about-me">About Me</a>
                        </li>
                        <li className={`w-max transform transition-all duration-500 ${open ? "delay-100 translate-x-0" : "delay-200 translate-x-50"}`}>
                            <a onClick={handleClickNav} className="bg-blue text-white text-[18px] px-1.5 py-1" href="#skills">Skills</a>
                        </li>
                        <li className={`w-max transform transition-all duration-500 ${open ? "delay-200 translate-x-0" : "delay-100 translate-x-50"}`}>
                            <a onClick={handleClickNav} className="bg-blue text-white text-[18px] px-1.5 py-1" href="#projects">Projects</a>
                        </li>
                        <li className={`w-max transform transition-all duration-500 ${open ? "delay-300 translate-x-0" : "delay-0 translate-x-50"}`}>
                            <a onClick={handleClickNav} className="bg-blue text-white text-[18px] px-1.5 py-1" href="#working-on">Working On</a>
                        </li>
                    </ul>
                    <button onClick={handleClickNav} className={`relative w-7 h-6 flex flex-col justify-between items-center gap-1 ${onTop ? null : "bg-blue w-11 h-11 px-2 py-2.5"}`} >
                        <span className={`block h-1 w-full bg-black transition-transform duration-200 ${open ? "rotate-45 translate-y-2.5" : ""} ${onTop ? null : "bg-white"}`}/>
                        <span className={`block h-1 w-full bg-black transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"} ${onTop ? null : "bg-white"}`}/>
                        <span className={`block h-1 w-full bg-black transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2.5" : ""} ${onTop ? null : "bg-white"}`} />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Nav;

const Header = ({ project }) => {
    return (
        <section className="w-full flex flex-col-reverse items-start gap-6 px-[clamp(1rem,_0.0317rem_+_4.1315vw,_3.75rem)]" >
            <div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-5">
                        <h1 className="text-[clamp(2.5rem,_1.9718rem_+_2.2535vw,_4rem)]/[100%] font-bold uppercase">{project.name}</h1>
                        <ul className="hidden md:gap-2 md:flex">
                            {
                                project.tools.map((tool, index) => (
                                    <li className="bg-blue h-[clamp(2rem,_1.6479rem_+_1.5023vw,_3rem)] w-[clamp(2rem,_1.6479rem_+_1.5023vw,_3rem)] p-[clamp(0.25rem,_0.206rem_+_0.1878vw,_0.375rem)]" key={index}><img src={new URL(`../../assets/${tool.icon}`, import.meta.url).href} alt={tool.name} /></li>
                                ))
                            }
                        </ul>
                    </div>
                    <ul className="col-span-2 flex gap-[clamp(0.75rem,_0.662rem_+_0.3756vw,_1rem)]">
                        {
                            project.hashtags.map((hashtag, index) => (
                                <li className="text-[clamp(0.875rem,_0.743rem_+_0.5634vw,_1.25rem)] opacity-60" key={index}>#{hashtag}</li>
                            ))
                        }
                    </ul>
                    <ul className="md:hidden gap-2 flex">
                        {
                            project.tools.map((tool, index) => (
                                <li className="bg-blue h-[clamp(2rem,_1.6479rem_+_1.5023vw,_3rem)] w-[clamp(2rem,_1.6479rem_+_1.5023vw,_3rem)] p-[clamp(0.25rem,_0.206rem_+_0.1878vw,_0.375rem)]" key={index}><img src={new URL(`../../assets/${tool.icon}`, import.meta.url).href} alt={tool.name} /></li>
                            ))
                        }
                    </ul>
                </div>
                {project.colaborators != "none" && (
                    <div className="mt-4 row-3 flex flex-row items-center gap-[clamp(0.5rem,_0.412rem_+_0.3756vw,_0.75rem)]">
                        <h4 className="text-[clamp(0.875rem,_0.787rem_+_0.3756vw,_1.125rem)] opacity-75">Colaborators:</h4>
                        <ul className="flex flex-row gap-[clamp(0.5rem,_0.412rem_+_0.3756vw,_0.75rem)]">
                            {
                                project.colaborators.map((colaborator, index) => (
                                    <li key={index}><a className="bg-blue h-min px-1 py-0.5 text-white text-[clamp(0.875rem,_0.787rem_+_0.3756vw,_1.125rem)] duration-100 hover:bg-black hover:text-white" href={colaborator.link} target="_blank">{colaborator.name}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                )}
            </div>
            <button className="bg-black text-white px-[clamp(0.5rem,_0.3239rem_+_0.7512vw,_1rem)] py-1 text-[clamp(1.25rem,_1.162rem_+_0.3756vw,_1.5rem)] font-medium uppercase cursor-pointer hover:bg-blue" onClick={() => history.back()}>&lt; Back</button>
        </section>
    );
};

export default Header;

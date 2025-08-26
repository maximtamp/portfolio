const SkillSet = ({ title, tools, skills }) => {
    let heading = null;

    switch (title) {
        case "development":
            heading = <h3 className="font-helvetica font-bold uppercase text-[clamp(2rem,_0.9437rem_+_4.507vw,_5rem)]">&lt;/{title}&gt;<span className="typing">_</span></h3>;
            break;
        case "design":
            heading = <h3 className="font-helvetica font-bold uppercase text-[clamp(2rem,_0.9437rem_+_4.507vw,_5rem)]">{title}</h3>;
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

    return (
        <li className="px-[clamp(0.875rem,_-0.1373rem_+_4.3192vw,_3.75rem)] flex flex-col gap-7">
            {heading}
            <ul className="flex flex-wrap gap-[clamp(0.375rem,_0.287rem_+_0.3756vw,_0.625rem)]">
                {tools.map((tool, index) => (
                    <li key={index} className="bg-blue w-[clamp(4rem,_2.5915rem_+_6.0094vw,_8rem)] h-[clamp(4rem,_2.5915rem_+_6.0094vw,_8rem)] p-[clamp(0.375rem,_0.243rem_+_0.5634vw,_0.75rem)]">
                        <h4 className="visually-hidden">{tool.name}</h4>
                        {tool.icon ? <img src={new URL(`../assets/${tool.icon}`, import.meta.url).href} alt={tool.name} />: null}
                    </li>
                ))}
            </ul>
            <ul className="flex flex-wrap gap-[clamp(0.5rem,_0.456rem_+_0.1878vw,_0.625rem)]">
                {skills.map((skill, index) => (
                    <li key={index} className="bg-[#1D1D1D] w-max px-[clamp(0.5rem,_0.3239rem_+_0.7512vw,_1rem)] py-[clamp(0.25rem,_0.162rem_+_0.3756vw,_0.5rem)] text-[clamp(1.125rem,_0.993rem_+_0.5634vw,_1.5rem)]">{skill}</li>
                ))}
            </ul>
        </li>
    );
};

export default SkillSet;

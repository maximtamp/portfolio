const SkillSet = ({ title, tools, skills }) => {
    let heading = null;

    switch (title) {
        case "development":
            heading = <h3 className="font-helvetica font-bold uppercase text-[2rem]">&lt;/{title}&gt;<span className="typing">_</span></h3>;
            break;
        case "design":
            heading = <h3 className="font-helvetica font-bold uppercase text-[2rem]">{title}</h3>;
            break;
        case "motion":
            heading = <h3 className="font-helvetica font-bold uppercase text-[2rem]">{title}</h3>;
            break;
        case "ux":
            heading = <h3 className="font-helvetica font-bold uppercase text-[2rem]">{title}</h3>;
            break;

        default:
            break;
    }

    return (
        <li className="px-3.5 flex flex-col gap-7">
            {heading}
            <ul className="flex flex-wrap gap-1.5">
                {tools.map((tool, index) => (
                    <li key={index} className="bg-blue w-16 h-16 p-1.5">
                        <h4 className="visually-hidden">{tool.name}</h4>
                        {tool.icon ? <img src={new URL(`../assets/${tool.icon}`, import.meta.url).href} alt={tool.name} />: null}
                    </li>
                ))}
            </ul>
            <ul className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <li key={index} className="bg-[#1D1D1D] w-max px-2 py-1 text-[18px]">{skill}</li>
                ))}
            </ul>
        </li>
    );
};

export default SkillSet;

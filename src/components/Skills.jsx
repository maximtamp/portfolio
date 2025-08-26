import SkillSet from './SkillSet';
import { skills } from '../data';

const Skills = ({ }) => {
    return (
        <section id='skills' className='bg-black text-white font-arial pb-30'>
            <h2 className='font-helvetica font-bold uppercase text-[clamp(5.5rem,_1.7148rem_+_16.1502vw,_16.25rem)] -ml-[clamp(1rem,_0.2958rem_+_3.0047vw,_3rem)]'>Skills<span className='text-blue'>.</span></h2>
            <p className='text-[clamp(1.25rem,_0.9859rem_+_1.1268vw,_2rem)]/[120%] w-[85%] max-w-[660px] text-right ml-auto mr-[clamp(1rem,_0.0317rem_+_4.1315vw,_3.75rem)] mt-10'>During my studies, I worked with a wide range of tools and developed skills in design, UX, development, motion graphics, and more.</p>
            <ul className='flex flex-col gap-16 mt-20'>
                { skills.map((skill, index) => (
                    <SkillSet key={index} title={skill.title} tools={skill.tools} skills={skill.skills} />
                ))}
            </ul>
        </section>
    );
};

export default Skills;

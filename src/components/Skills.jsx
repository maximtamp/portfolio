import SkillSet from './SkillSet';
import { skills } from '../data';
const Skills = ({ }) => {
    return (
        <section id='skills' className='bg-black text-white font-arial pb-30'>
            <h2 className='font-helvetica font-bold uppercase text-[88px] -ml-3'>Skills<span className='text-blue'>.</span></h2>
            <p className='text-[20px]/6 w-[85%] text-right ml-auto mr-4 mt-10'>During my studies, I worked with a wide range of tools and developed skills in design, UX, development, motion graphics, and more.</p>
            <ul className='flex flex-col gap-16 mt-20'>
                { skills.map((skill, index) => (
                    <SkillSet key={index} title={skill.title} tools={skill.tools} skills={skill.skills} />
                ))}
            </ul>
        </section>
    );
};

export default Skills;

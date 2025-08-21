import SkillSet from './SkillSet';
const Skills = ({ }) => {
    return (
        <section id='skills'>
            <h2>Skills</h2>
            <p>During my studies, I worked with a wide range of tools and developed skills in design, UX, development, motion graphics, and more.</p>
            <ul>
                <SkillSet title="Development" skills={['VS Code', 'Responsive']} />
            </ul>
        </section>
    );
};

export default Skills;

import tailwindCssLogo from "../assets/tailwindcss.png";

const WorkingOn = ({ }) => {
    return (
        <section>
            <h2>Working On</h2>
            <div>
                <div>
                    <h3>Learning TailwindCSS</h3>
                    <div>
                        <p>While working on other projects, I noticed I was losing a lot of time styling the pages with CSS. I found this frustrating, so I started looking for a solution, “Tailwind CSS.”</p>
                        <p>(This is the first project where I’m using Tailwind CSS.)</p>
                    </div>
                </div>
                <img src={tailwindCssLogo} alt="TailwindCSS Logo" />
            </div>
        </section>
    );
};

export default WorkingOn;

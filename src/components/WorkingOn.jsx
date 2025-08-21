import tailwindCssLogo from "../assets/tailwindcss.png";

const WorkingOn = ({ }) => {
    return (
        <section id="working-on" className="flex flex-col-reverse px-4 mt-[104px] mb-30">
            <h2 className="font-helvetica text-[48px] font-bold uppercase -mb-4 pt-2 border-t-8 border-black">Working On</h2>
            <div className="grid grid-cols-[max-content 1fr] grid-rows-[max-content 1fr] gap-y-7 pb-10">
                <h3 className="row-1 col-2 font-helvetica text-[32px]/8 font-bold uppercase">Learning TailwindCSS</h3>
                <div className="row-2 col-start-1 col-span-2 font-arial text-[18px]/5 flex flex-col gap-5">
                    <p>While working on other projects, I noticed I was losing a lot of time styling the pages with CSS. I found this frustrating, so I started looking for a solution, “Tailwind CSS.”</p>
                    <p className="opacity-60">(This is the first project where I’m using Tailwind CSS.)</p>
                </div>
                <img className="w-[88px] h-auto max-w-none self-center" src={tailwindCssLogo} alt="TailwindCSS Logo" />
            </div>
        </section>
    );
};

export default WorkingOn;

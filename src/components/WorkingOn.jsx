import tailwindCssLogo from "../assets/tailwindcss.png";

const WorkingOn = ({ }) => {
    return (
        <section id="working-on" className="flex flex-col-reverse px-[clamp(1rem,_0.0317rem_+_4.1315vw,_3.75rem)] mt-[104px] mb-30 min-[1440px]:w-[1360px] min-[1440px]:mx-auto">
            <h2 className="font-helvetica text-[clamp(3rem,_0.5352rem_+_10.5164vw,_10rem)] font-bold uppercase -mb-4 pt-[clamp(0rem,_0.6761rem_+_-0.7512vw,_0.5rem)] border-t-[clamp(0.5rem,_0.412rem_+_0.3756vw,_0.75rem)] border-black">Working On</h2>
            <div className="grid grid-cols-[max-content_1fr] grid-rows-[max-content_1fr] gap-y-[clamp(1.75rem,_1.662rem_+_0.3756vw,_2rem)] gap-x-[clamp(1rem,_0.2077rem_+_3.3803vw,_3.25rem)] pb-[clamp(2.5rem,_1.6197rem_+_3.7559vw,_5rem)]">
                <h3 className="row-1 col-2 font-helvetica text-[clamp(2rem,_1.6479rem_+_1.5023vw,_3rem)]/[120%] font-bold uppercase w-min my-auto md:w-max">Learning TailwindCSS</h3>
                <div className="row-2 col-start-1 col-span-2 font-arial flex flex-col gap-5 md:col-2">
                    <p className="text-[clamp(1.125rem,_0.9049rem_+_0.939vw,_1.75rem)]/[120%]">While working on other projects, I noticed I was losing a lot of time styling the pages with CSS. I found this frustrating, so I started looking for a solution, “Tailwind CSS.”</p>
                    <p className="opacity-60 text-[clamp(1rem,_0.8239rem_+_0.7512vw,_1.5rem)]/[120%]">(This is the first project where I’m using Tailwind CSS.)</p>
                </div>
                <img className="w-[clamp(5.5rem,_0.3944rem_+_21.784vw,_20rem)] h-auto max-w-none self-center md:row-start-1 md:row-span-2 md:my-auto" src={tailwindCssLogo} alt="TailwindCSS Logo" />
            </div>
        </section>
    );
};

export default WorkingOn;

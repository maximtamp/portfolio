import Nav from "../components/Nav";
import Header from "../components/project/Header";
import { projects } from "../data";
import logo from "../assets/car-step-logo.png";
import phone from "../assets/car-step-phone.png";
import watch from "../assets/car-step-watch.png";
import Gallery from "../components/project/Gallery";

import galleryImage1 from "../assets/car-step-image-1.png";
import galleryImage2 from "../assets/car-step-image-2.png";
import galleryImage3 from "../assets/car-step-image-3.png";
import galleryImage4 from "../assets/car-step-image-4.png";
import galleryImage5 from "../assets/car-step-image-5.png";
import galleryImage6 from "../assets/car-step-image-6.png";
import galleryImage7 from "../assets/car-step-image-7.png";
import galleryImage8 from "../assets/car-step-image-8.png";
import Footer from "../components/Footer";
import Video from "../components/project/Video";

const CarStep = ({ }) => {
    const project = projects.find(p => p.name === "Car Step");
    const galleryImages = [galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6, galleryImage7, galleryImage8];

    return (
        <section className="bg-white selection:bg-blue selection:text-white">
            <Nav />
            <Header project={project} />
            <div className="w-full mt-[clamp(1.5rem,_0.7958rem_+_3.0047vw,_3.5rem)] grid grid-cols-1 grid-rows-[max-content_max-content_max-content] place-items-center md:grid-cols-[max-content_max-content_1fr_max-content] md:place-items-start">
                <img className="col-1 row-2 w-[clamp(7.5rem,_4.9692rem_+_10.7981vw,_14.6875rem)] ml-[clamp(14rem,_9.229rem_+_20.3562vw,_19rem)] -mt-[clamp(5rem,_2.6145rem_+_10.1781vw,_7.5rem)] md:col-4 md:row-1 md:-mt-20 md:ml-0" src={logo} alt="Car Step logo" />
                <img className="col-1 row-2 w-[clamp(11.25rem,_7.7509rem_+_14.9296vw,_21.1875rem)] -ml-[clamp(7.5rem,_5.1145rem_+_10.1781vw,_10rem)] md:row-start-1 md:row-span-3 md:-ml-[clamp(0.75rem,_-0.1071rem_+_1.7857vw,_1.5rem)]" src={phone} alt="Phone with Car Step app" />
                <p className="col-1 row-1 max-w-[50rem] text-[clamp(1rem,_0.912rem_+_0.3756vw,_1.25rem)] px-[clamp(1rem,_-0.4313rem_+_6.1069vw,_2.5rem)] pb-[clamp(1.5rem,_0.0687rem_+_6.1069vw,_3rem)] mx-auto md:col-start-2 md:col-span-2 md:py-[clamp(1.5rem,_-1.9286rem_+_7.1429vw,_4.5rem)]">For my passion project in my third year of Devine, I decided to create an app because I was always drawn to the idea of building one. I wanted to go a step further by also adding a watch app. To make this all happen, I dove into Swift, which is an iOS development language used to create apps for devices running Apple’s iOS system.</p>
                <img className="col-1 row-2 w-[clamp(8rem,_5.7113rem_+_9.7653vw,_14.5rem)] ml-[clamp(9rem,_7.0916rem_+_8.1425vw,_11rem)] mt-[clamp(9rem,_7.0916rem_+_8.1425vw,_11rem)] md:col-start-1 md:col-span-2 md:mt-0 md:ml-[clamp(10rem,_4.2857rem_+_11.9048vw,_15rem)]" src={watch} alt="Watch with Car Step app" />
                <div className="flex flex-col gap-4 col-1 row-3 max-w-[48rem] text-[clamp(1rem,_0.912rem_+_0.3756vw,_1.25rem)] mx-auto px-[clamp(1rem,_-0.4313rem_+_6.1069vw,_2.5rem)] pt-[clamp(1.5rem,_0.0687rem_+_6.1069vw,_3rem)] md:col-start-3 md:col-span-2 md:row-2 md:pt-0">
                    <p>I created an app to motivate people to walk more. The app takes the steps tracked by the Apple Health app, which you can claim and convert into fuel. You can then use this fuel to build different car parts. After collecting enough parts, you can assemble your own car and race against others or added friends.</p>
                    <p>I also added quests and a leaderboard so people become more motivated to compete and take more steps.</p>
                </div>
            </div>
            <Video link="https://www.youtube.com/embed/E-xQgpeG9Mc?si=KPNT_9qqcH_1eCQ0" />
            <Gallery images={galleryImages} />
            <div className="bg-black text-white py-12 px-[clamp(1rem,_-0.4313rem_+_6.1069vw,_2.5rem)] flex flex-col items-center gap-4 text-[clamp(1rem,_0.912rem_+_0.3756vw,_1.25rem)]">
                <p>Want to get to know more about the project?</p>
                <a className="font-medium underline-offset-2 cursor-pointer bg-blue py-2 px-3 hover:text-black hover:bg-white" href="https://www.notion.so/Passion-Project-Blog-Tampere-Maxim-2a97531c38b9806b887fcae958dc4972?source=copy_link" target="_blank">Explore my blog</a>
            </div>
            <Footer />
        </section>
    );
};

export default CarStep;

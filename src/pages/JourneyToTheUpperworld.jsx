import { projects } from "../data";

import Nav from "../components/Nav";
import Header from "../components/project/Header";
import Footer from "../components/Footer";
import Video from "../components/project/Video";

import ballon from "../assets/reis-naar-de-bovenwereld-ballon.png";
import fotoLenieAlex from "../assets/reis-naar-de-bovenwereld-lenie-en-alex.png";
import alien from "../assets/reis-naar-de-bovenwereld-alien.png";
import jury from "../assets/reis-naar-de-bovenwereld-jury.png";
import mand from "../assets/reis-naar-de-bovenwereld-mand.png";

import galleryImage1 from "../assets/reis-naar-de-bovenwereld-image-1.png";
import galleryImage2 from "../assets/reis-naar-de-bovenwereld-image-2.png";
import galleryImage3 from "../assets/reis-naar-de-bovenwereld-image-3.png";
import galleryImage4 from "../assets/reis-naar-de-bovenwereld-image-4.png";
import galleryImage5 from "../assets/reis-naar-de-bovenwereld-image-5.png";
import galleryImage6 from "../assets/reis-naar-de-bovenwereld-image-6.png";
import galleryImage7 from "../assets/reis-naar-de-bovenwereld-image-7.png";
import Gallery from "../components/project/Gallery";

const JourneyToTheUpperworld = ({ }) => {
    const project = projects.find(p => p.name === "Journey to the Upperworld");
    const galleryImages = [galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6, galleryImage7];

    return (
        <section className="bg-white selection:bg-blue selection:text-white">
            <Nav />
            <Header project={project} />
            <div className="grid grid-cols-1 gap-y-6 text-[clamp(1rem,_0.912rem_+_0.3756vw,_1.25rem)] mt-[clamp(1.5rem,_0.7958rem_+_3.0047vw,_3.5rem)] place-items-center lg:grid-cols-[max-content_max-content_1fr_max-content] lg:grid-rows-[max-content_max-content_max-content_max-content_max-content_max-content] lg:place-items-start">
                <img className="row-2 col-1 w-[clamp(8.5rem,_7.2236rem_+_5.446vw,_12.125rem)] z-1 mt-20 ml-52 lg:col-4 lg:row-start-1 lg:row-span-3 lg:mt-0 lg:ml-0 lg:mr-[clamp(1rem,_-3.9231rem_+_7.6923vw,_3rem)]" src={ballon} alt="Ballon" />
                <img className="row-2 col-1 w-[clamp(14.375rem,_12.3944rem_+_8.4507vw,_20rem)] -ml-28 lg:col-1 lg:row-start-1 lg:row-span-4 lg:ml-[clamp(2.5rem,_-0.5769rem_+_4.8077vw,_3.75rem)]" src={fotoLenieAlex} alt="Foto lenie en alex" />
                <p className="row-1 max-w-[48rem] mx-auto px-[clamp(1rem,_-0.4313rem_+_6.1069vw,_2.5rem)] lg:col-start-2 lg:col-span-2 lg:row-1 lg:mt-[clamp(0rem,_-7.3846rem_+_11.5385vw,_3rem)]">For our Devine bachelor thesis, my team and I were challenged to create an immersive installation for a real client, <a className="underline-offset-2 cursor-pointer underline hover:text-blue" href="https://www.jeugdfilmfestivalantwerpen.be/nl" target="_blank" rel="noopener noreferrer">JeugdFilmFestival</a>, to be showcased and played with in their Medialab of 2026.</p>
                <p className="row-3 max-w-[48rem] mx-auto px-[clamp(1rem,_-0.4313rem_+_6.1069vw,_2.5rem)] lg:col-start-2 lg:col-span-2 lg:row-2">We worked in a team of three. When forming the groups, we looked for people whose skills complemented our own, which resulted in a well-balanced team: Tiemen (Design), Jara (Development), and me (Experience Design).</p>
                <img className="row-5 col-1 w-[clamp(9.8125rem,_8.6021rem_+_5.1643vw,_13.25rem)] z-1 mt-32 ml-48 lg:col-1 lg:row-start-4 lg:row-span-2 lg:ml-[clamp(3.5rem,_1.0385rem_+_3.8462vw,_4.5rem)] lg:-mt-14" src={alien} alt="Alien" />
                <img className="row-5 col-1 w-[clamp(13.8125rem,_11.2817rem_+_10.7981vw,_21rem)] -ml-30 lg:col-start-1 lg:col-span-2 lg:row-start-4 lg:row-span-3 lg:ml-[clamp(7.5rem,_-3.2692rem_+_16.8269vw,_11.875rem)]" src={jury} alt="Jury" />
                <p className="row-4 max-w-[48rem] mx-auto px-[clamp(1rem,_-0.4313rem_+_6.1069vw,_2.5rem)] lg:col-start-3 lg:col-span-2 lg:row-4 lg:mt-[clamp(0rem,_-7.3846rem_+_11.5385vw,_3rem)]">“Reis naar de Bovenwereld” (Journey to the Upperworld) is a cooperative installation where you and a friend work together to rescue an alien and return it to its home planet. You physically step into a hot-air balloon and steer it by turning the propellers. To safely navigate the journey, you need to communicate and coordinate to avoid the different obstacles along the way.</p>
                <p className="row-6 max-w-[48rem] mx-auto px-[clamp(1rem,_-0.4313rem_+_6.1069vw,_2.5rem)] lg:col-start-3 lg:col-span-2 lg:row-5">With this project, we wanted to create an immersive experience where children can learn through play. We do this by placing them in a real, physical hot-air balloon they can climb into, making them feel like an active part of the mission. In the game, they travel through different spheres that mirror real-life environments and contain obstacles they might encounter in the real world. In this way, the installation helps children better understand what is happening in space and how it relates to the world around them.</p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row lg:gap-[clamp(2.5rem,_-3.6538rem_+_9.6154vw,_5rem)] justify-between items-center px-[clamp(1rem,_-1.9489rem_+_12.5822vw,_9.375rem)]">
                <p className="text-[clamp(1rem,_0.912rem_+_0.3756vw,_1.25rem)] max-w-[40rem]">What was my role in this project? I acted as the project leader, coordinating the team and overseeing the overall progress. In addition, I was the experience design lead, responsible for shaping the user journey and interaction within the installation. Finally, I was in charge of creating the physical balloon and producing the animations used in the game.</p>
                <img className="w-[clamp(27.125rem,_26.7729rem_+_1.5023vw,_28.125rem)] mx-auto my-[clamp(1.5rem,_1.1479rem_+_1.5023vw,_2.5rem)]" src={mand} alt="Mand" />
            </div>
            <Video link="https://www.youtube.com/embed/DYJqYX93VLg?si=FWia_4EU73KRsvnA" />
            <Gallery images={galleryImages} />
            <div className="bg-black w-full pt-12"></div>
            <Footer />
        </section>
    );
};

export default JourneyToTheUpperworld;
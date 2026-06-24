import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import WorkingOn from '../components/WorkingOn'
import Footer from '../components/Footer'

function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }
    }, [location]);

    return (
        <main id='main' className='bg-white selection:bg-blue selection:text-white overflow-x-hidden'>
            <div className='h-dvh flex flex-col justify-between'>
                <Nav />
                <Hero />
            </div>
            <AboutMe />
            <Skills />
            <Projects />
            <WorkingOn />
            <Footer />
        </main>
    )
}

export default Home

import React from 'react';
import '../../App.css';
import HeroSection from '../sections/HeroSection';
import EducationSection from '../sections/EducationSection';
import InfoCardSection from '../sections/InfoCardSection';
import ProjectSection from '../sections/projects/ProjectSection';
import Footer from '../Footer';
import { useEffect } from 'react';
import AboutMeSection from '../sections/AboutMeSection';
function Home(){
    useEffect(() => {
        document.title = 'Emmy Lindgren';
      });
    return(
        <>
            <HeroSection/>
            <AboutMeSection/>
            <EducationSection id='education'/>
            <InfoCardSection/>
            <ProjectSection/>
            <Footer/>
        </>
    );
}

export default Home;
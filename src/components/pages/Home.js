import React from 'react';
import '../../App.css';
import HeroSection from '../sections/hero/HeroSection';
import EducationSection from '../sections/education/EducationSection';
import InfoCardSection from '../sections/education/InfoCardSection';
import ProjectSection from '../sections/projects/ProjectSection';
import Footer from '../sections/footer/Footer';
import { useEffect } from 'react';
import AboutMeSection from '../sections/aboutMe/AboutMeSection';
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
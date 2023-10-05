import React from 'react';
import '../../App.css';
import HeroSection from '../sections/HeroSection';
import EducationSection from '../sections/EducationSection';
import InfoCardSection from '../sections/InfoCardSection';
import ProjectSection from '../sections/projects/ProjectSection';
import Footer from '../Footer';
import { useEffect } from 'react';
function Home(){
    useEffect(() => {
        document.title = 'Emmy Lindgren';
      });
    return(
        <>
            <HeroSection/>
            {/*<Cards/> = de korten som han gjorde. Kanske använda (omstylade) som projekt?*/}
            <EducationSection id='education'/>
            <InfoCardSection/>
            <ProjectSection/>
            <Footer/>
        </>
    );
}

export default Home;
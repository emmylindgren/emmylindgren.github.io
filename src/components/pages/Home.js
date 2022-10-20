import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import EducationSection from '../EducationSection';
import InfoCardSection from '../InfoCardSection';
import ProjectSection from '../ProjectSection';
import Footer from '../Footer';
function Home(){
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
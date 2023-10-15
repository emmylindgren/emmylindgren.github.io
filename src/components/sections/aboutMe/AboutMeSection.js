import React from 'react';
import '../../../App.css';
import styles from './AboutMeSection.module.css';

function AboutMeSection() {
  return (
    <div className={'mainContainer ' + styles.AboutMeSection} id="aboutMeSection">
        <h2 className='sectionHeading'>Om mig</h2>
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.aboutMeContainer}>
                    <div className={styles.aboutMeText}>
                        <p>Emmy heter jag och är originellt från Skellefteå.  Efter att ha börjat studera beteendevetenskap i Umeå 2017, 
                            insåg jag mitt verkliga intresse för att lösa logiska problem. 
                            Därför bytte jag spår och går nu mitt sista år till civilingenjör. 
                            Jag gillar att skapa digitala lösningar och mjukvaruapplikationer som löser praktiska problem, och samtidigt utmanar min kreativitet.
                        </p>
                    </div>
                </div>
                <div className={styles.smileyContainer}>
                    <p>:)</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMeSection


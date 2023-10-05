import React from 'react';
import '../../App.css';
import styles from './AboutMeSection.module.css';

function AboutMeSection() {
  return (
    <div className='mainContainer' id='aboutMeSection'>
        <h2 className='sectionHeading'>Om mig</h2>
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.aboutMeContainer}>
                    <div className={styles.aboutMeText}>
                        <p>Emmy heter jag, 26 år gammal  och född i Skellefteå.</p>
                        <p>Jag flyttade till Umeå 2017 för att studera beteendevetenskap, men bytte 2019 bana till civilingenjör.</p>
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


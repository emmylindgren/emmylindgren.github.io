import React from 'react';
import styles from './InfoCardSection.module.css';
import '../../../App.css';

function InfoCardSection() {
  return (
    <div className={'mainContainer ' + styles.infoCardSection} id="infoCard-Section">
      <div className={styles.infoCardContainer}>

        <div className={`${styles.development} ${styles.infoCard}`}>
            <img className={styles.cardIcon} src="icons/Development.png" alt="Programmeringsikon"/>

            <h2 className={styles.cardHeadline}>Utveckling</h2>
            <p className={styles.cardInfotext}>Programmering och utveckling är en stor del av min utbildning 
            och det passar mig perfekt! Jag gillar att skapa saker från grunden, hela vägen upp. </p>

            <div className={styles.subContainer}>
              <h3 className={styles.subHeadline}>Språk</h3>
              <p className={styles.subText}>Java, JavaScript, HTML, CSS, SQL, C, Haskell </p>
            </div>

            <div className={`${styles.subContainer} ${styles.subContainerRight}`}>
              <h3 className={styles.subHeadline}>Utvecklingsverktyg</h3>
              <p className={styles.subText}>Visual Studio Code, Visual Studio, Git, Android Studio</p>
            </div>
        </div>

        <div className={`${styles.design} ${styles.infoCard}`}>
            <img className={styles.cardIcon} src="icons/Design.png" alt="DesignIkon"/>

            <h2 className={styles.cardHeadline}>Design</h2>
            <p className={styles.cardInfotext}>Att designa interaktiva och intuitiva gränssnitt 
            är den andra byggstenen i min utbildning. Jag värderar enkel och tydlig design, tillgänglig för alla. </p>

            <div className={`${styles.subContainer} ${styles.subContainerRight}`}>
              <h3 className={styles.subHeadline}>Jag gillar att designa</h3>
              <p className={styles.subText}>UX, UI, Appar, Ikoner </p>
            </div>

            <div className={styles.subContainer}>
              <h3 className={styles.subHeadline}>Designverktyg</h3>
              <p className={styles.subText}>Figma, Inkscape, Adobe XD</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCardSection

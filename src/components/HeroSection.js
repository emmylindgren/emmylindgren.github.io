import React from 'react';
import styles from './HeroSection.module.css';
import '../App.css';


function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>EMMY</h2>
        <h2>LINDGREN</h2>
      </div>
      <div className={styles.text}>
        <p>Civilingenjörsstudent inom interaktion och design</p>
      </div>
      <img className={styles.profilePic}src="pictures/profilePicture.jpg" alt='Profile'/>
    </div>
  )
}
export default HeroSection

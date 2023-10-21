import React from 'react';
import styles from './EducationSection.module.css';
import '../../../App.css';

function EducationSection() {
  return (
    <div className={'mainContainer ' + styles.educationSection} id="educationSection">
        <h2 className='sectionHeading'>Utbildning</h2>
        <div className={styles.educationContainer}>
            <img className={styles.IDLogo} alt= "ID-loggan på en bakgrund med cirklar"src='icons/IDLogo.png'/>
            <h3 className={styles.header}>Interaktion & Design</h3>
            <p className={styles.educationText}>Civilingenjörsprogrammet i interaktion och design är en bred civilingenjörsutbildning
               som behandlar mötet mellan människa och maskin. Att skapa hållbara, intuitiva och smidiga system helt enkelt.</p>
        </div>
    </div>
  )
}

export default EducationSection

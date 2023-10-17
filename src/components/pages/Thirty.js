import React from 'react';
import ProjectDetails from '../ProjectDetails';
import styles from '../ProjectDetails.module.css';

function Thirty() {
  return (
    <>
      <ProjectDetails 
          title ="Thirty"
          dateText = 'Sommaren 2021'
          fieldText = 'Design & implementation'
          header_images = {['pictures/Thirty/Score.png','pictures/Thirty/Start.png']}
          header_color = '1'
      >
        <div>
          <p>
          Ett mobilspel där du får slå tärningar och ska låsa dem i olika spelomgångar. Hur många poäng kan du få?  
          </p>
        </div>
        <div>
          <h3>Vad var uppgiften?</h3>
          <p>
          Denna app skapades i kursen Utveckling av mobila applikationer som andra laboration. 
          Uppgiften var att återskapa tärningsspelet Thirty i en mobil applikation. Designen 
          fick man göra själv, men den skulle anpassas efter olika skärmstorlekar. 
            </p>
        </div>
        <div>
          <h3>Hur spelar man?</h3>
          <p>
          Det finns 10 rundor i spelet, low och sedan från 4 upp till 12. Low innebär att alla 
          kombinationer som ger något tal under 4 räknas ihop och ger poäng. För 4 räknas alla kombinationer 
          som summerar till 4 ihop. Du får slå 3 gånger för varje omgång och du får själv välja vilken omgång 
          du vill samla poäng för efter 3 slag. Du kan låsa och gruppera ihop tärningar med hjälp av de olika färgerna.  
          När man låser en tärning behåller den sitt värde även om du slår tärningarna. 
          </p>
        </div>
        <div>
          <h3>Utvecklingsprocessen</h3>
          <p>
          Först designades gränssnittet med hjälp av Figma. 
          Applikationen implementerades sedan i Android studio i Java. 
          Under hela utvecklingsperioden användes GitHub för versionshantering.  
          </p>
          <div className={styles.icons}>
            <img src='icons/Figma.svg' alt='figmaIcon'/>
            <img src='icons/AndroidStudio.svg' alt='androidStudioIcon'/>
            <img src='icons/Java.svg' alt='JavaIcon'/>
            <a target="_blank" href="https://github.com/emmylindgren/thirty" rel="noreferrer">
                <img src='icons/Github.svg' alt='githubIcon'/>
            </a>
          </div>
        </div>
      </ProjectDetails>
  </>
  )
}
export default Thirty

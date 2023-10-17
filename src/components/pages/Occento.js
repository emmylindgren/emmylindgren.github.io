import React from 'react';
import ProjectDetails from '../ProjectDetails';
import styles from '../ProjectDetails.module.css';

function Occento() {
  return (
    <>
      <ProjectDetails 
          title ="Occento"
          dateText = 'Sommaren 2021'
          fieldText = 'Design & implementation'
          header_images = {['pictures/Occento/Start.png','pictures/Occento/Songs.png','pictures/Occento/Game.png']}
          header_color = '2'
      >
        <div>
          <p>
            Mobilspelet som testar dina musikkunskaper! Samla poäng och tävla med dina vänner. 
          </p>
        </div>
        <div>
          <h3>Vad var uppgiften?</h3>
          <p>
          Denna app skapades i kursen Utveckling av mobila applikationer som tredje och sista laboration. 
          Uppgiften var väldigt fri, skapa en applikation från egen idé. App/action-bar ska finnas med, 
          tillstånd ska sparas och appen ska använda sig av minst en sensor.
            </p>
        </div>
        <div>
          <h3>Hur spelar man?</h3>
          <p>
          Appen kommer med några låtar i databasen när den installeras. Du kan välja att spela direkt eller lägga till/ta 
          bort låtar först. När spelaren tryckt på “spela” ska mobilen placeras i pannan och resterande spelare ska nu 
          sjunga den låttext som dyker upp.  Nu börjar gissningsleken! Gissar du rätt vinklar du mobilen nedåt och får poäng, 
          vill du passa en låt vinklar du den istället uppåt. En spelomgång är 3 minuter. 
            </p>
        </div>
        <div>
          <h3>Utvecklingsprocessen</h3>
          <p>
            Först designades gränssnittet med hjälp av Figma. 
            Applikationen implementerades sedan i Android studio i Java. Under hela utvecklingsperioden användes GitHub 
            för versionshantering. 
          </p>
          <div className={styles.icons}>
            <img src='icons/Figma.svg' alt='figmaIcon'/>
            <img src='icons/AndroidStudio.svg' alt='androidStudioIcon'/>
            <img src='icons/Java.svg' alt='JavaIcon'/>
            <a target="_blank" href="https://github.com/emmylindgren/OCCENTO" rel="noreferrer">
                <img src='icons/Github.svg' alt='githubIcon'/>
            </a>
          </div>
        </div>
      </ProjectDetails>
  </>
  )
}
export default Occento

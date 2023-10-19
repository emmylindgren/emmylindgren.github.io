import React from 'react';
import ProjectDetails from '../ProjectDetails';
import styles from '../ProjectDetails.module.css';

function LabPlant() {
  return (
    <>
      <ProjectDetails 
          title ="LabPlant"
          dateText = 'Våren 2022'
          fieldText = 'Design & implementation'
          header_images = {['pictures/LabPlant/Start.png','pictures/LabPlant/PlantInfo.png','pictures/LabPlant/PlantInfo2.png']}
          header_color = '4'
      >
        <div>
          <p>
            Ett system för övervakning och automatiskt vattning av krukväxter! Systemet består av en Raspberry Pi 4, en ESP-32 samt några sensorer.
          </p>
        </div>
        <div>
          <h3>Vad var uppgiften?</h3>
          <p>
            Detta system skapades i kursen Design och Tjänsteutveckling för IoT. Kursen berörde Internet of Things och gick ut på att lära sig hantera 
            mikrokontrollers och sensorer.  Detta var slutprojektet och det var fritt utformat, ett system som ska hjälpa människor i deras vardag med vardagliga 
            saker. Det skulle ingå valfria sensorer, men minst två olika.  
          </p>
        </div>
        <div>
          <h3>Vår lösning</h3>
          <p>
            Vår lösning var labplant. Raspberry Pi användes som en hub för att ta emot data från en mikrokontroller: ESP32. ESP32:an var kopplad till en 
            temperatur och fuktighets-sensor, en ljussensor, en jordfuktighetssensor samt en vattenpump. Ett gränssnitt skapades där användaren kunde välja vilken 
            slags krukväxt sensorerna hade kopplats på. Beroende på krukväxt och sensordatan ändrades sedan ikonernas färg efter hur växten mår när det kommer till 
            temperatur, fuktighet, ljus och jordfuktighet. Växten vattnades också om jordfuktigheten var för låg för många dagar i sträck. Men som användare 
            kunde man också vattna växten genom systemet.  
          </p>
        </div>
        <div>
          <h3>Utvecklingsprocessen</h3>
          <p>
            För att utveckla på ESP32 användes Mongoose OS och koden skrevs i JavaScript. 
            På Raspberry Pi användes Node.js för att sätta upp den som en hub och skapa gränssnittet. 
            Det roliga med detta projekt var att vi även fick jobba fysiskt och faktiskt koppla upp sensorer mot vår ESP32. 
          </p>
          <div className={styles.icons}>
            <img src='icons/MongooseOS.svg' alt='Mongoose OS'/>
            <img src='icons/JavaScript.svg' alt='JavaScript'/>
            <img src='icons/NodeJS.svg' alt='NodeJS'/>
          </div>
        </div>
      </ProjectDetails>
  </>
  )
}
export default LabPlant
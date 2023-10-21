import React from 'react';
import ProjectDetails from '../ProjectDetails';
import styles from '../ProjectDetails.module.css';

function GreetUp() {
  return (
    <>
      <ProjectDetails 
          title ="GreetUp"
          dateText = 'Våren 2022'
          fieldText = 'Design & implementation'
          header_images = {['pictures/GreetUp/Start.png','pictures/GreetUp/Event.png','pictures/GreetUp/ComingUp.png']}
          header_color = '1'
      >
        <div>
          <p>
            GreetUp är en applikation för att skapa och delta i event nära dig. Skapad med syfte att minska ensamheten för äldre 
            och göra det enklare för dem att hitta nya vänner. Skapa event, delta i event, samla bagdes och gör inlägg i forumet 
            för att starta en konversation om ditt grannskap!
          </p>
        </div>
        <div>
          <h3>Vad var uppgiften?</h3>
          <p>
            På kursen Teknik för sociala medier genomfördes ett samarbete med Edith Cowan University i Australien.
              Syftet var att skapa ett socialt medium skulleminska ensamheten bland äldre i Australien. 
              Marknadsundersökning genomfördes av ECU-studenter medan vi i Umeå agerade utvecklarsida. 
              Parallellt gick kursen Applikationsutveckling för internet, vilket gav min grupp möjligheten att slå ihop projekten
              i båda kurser till ett enda större projekt. Även här var uppgiften fri men innebar ett nära samarbete med 
              ECU samt att en webbapplikation skulle utvecklas.
            </p>
        </div>
        <div>
          <h3>Hur fungerar appen?</h3>
          <p>
              Applikationen är som sagt designad och utformad för en äldre målgrupp. Vi valde en enkel och säker navigering,
              lugna färger och igenkännbara element. På startsidan kan man bläddra bland event som andra lagt ut nära dig.
              Man kan också skapa ett eget event, där får man välja om man vill att eventet ska vara publikt eller privat. 
              För ett privat event måste man som gäst göra en förfrågan till den person som äger eventet innan man får mer
              information om det. När man går på event samlar man på sig badges/brickor, ett inslag av gamification.
              Till sist kan man även göra inlägg på sin grannskapsvägg. Alla inlägg i närheten av dig kommer upp och 
              du kan kommentera samt gilla dem. På så sätt kan man sprida en känsla av grannskap innan man ens kliver utanför dörren.
            </p>
        </div>
        <div>
          <h3>Utvecklingsprocessen</h3>
          <p>
            Först genomfördes förstudier och marknadsundersökning av ECU-studenterna. 
            Efter det skapade vår grupp en prototyp utifrån detta i Figma. Prototypen diskuterades och justeringar gjordes i 
            samråd med ECU. Sedan användes Visual Studio med Entity Framework för att skapa databasen med metoden Code First. 
            Visual studio Code användes för själva webbapplikationen, då denna implementerades med hjälp av React. Under hela 
            utvecklingsprocessen användes GitHub för versionshantering.
          </p>
          <div className={styles.icons}>
            <img src='icons/Figma.svg' alt='figmaIcon'/>
            <img src='icons/visualstudio.svg' alt='visualStudioIcon'/>
            <img src='icons/React.svg' alt='ReactIcon'/>
            <a target="_blank" href="https://github.com/emmylindgren/GreetUp" rel="noreferrer">
                <img src='icons/Github.svg' alt='githubIcon'/>
            </a>
          </div>
        </div>
      </ProjectDetails>
  </>
  )
}
export default GreetUp

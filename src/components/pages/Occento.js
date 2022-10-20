import React from 'react';
import ProjectDetails from '../ProjectDetails';

function Occento() {
    /*Kan lägga alla variabler här, det blir nog snyggast och mest lättläsligt då! */
  return (
    <>
    <ProjectDetails headline ="OCCENTO"
      date = 'Sommaren 2021'
      srcImg_1 ='pictures/OccentoMockupStart.png'
      introduction ='Mobilspelet som testar dina musikkunskaper! Samla poäng och tävla med dina vänner.'

      standing_images = {['pictures/occentoLat.png','pictures/occentoLaggTillLat.png']}
      laying_images = {['pictures/OccentoMockupSpel.png']}

      /*assignmentHeadline  as alternative headline for assignmenttext*/
      assignmenttext = {'Denna app skapades i kursen Utveckling av mobila applikationer som tredje och sista laboration. ' 
      + 'Uppgiften var väldigt fri, skapa en applikation från egen idé. ' 
      + 'App/action-bar ska finnas med, tillstånd ska sparas och appen ska använda sig av minst en sensor.'}

      subheadline2 = 'Hur spelar man?'

      subtext2 ={'Appen kommer med några låtar i databasen när den installeras. Du kan välja att spela direkt eller '+
      'lägga till/ta bort låtar först. När spelaren tryckt på “spela” ska mobilen placeras i pannan och resterande'+
      ' spelare ska nu sjunga den låttext som dyker upp.  Nu börjar gissningsleken! Gissar du rätt vinklar du mobilen'+
      ' nedåt och får poäng, vill du passa en låt vinklar du den istället uppåt. En spelomgång är 3 minuter. '}

      /*developmentHeadline  as alternative headline for developmenttext*/
      developmenttext = {'Först designades gränssnittet med hjälp av Figma. Applikationen implementerades sedan i' +
      ' Android studio med programmeringsspråket Java. Under hela utvecklingsperioden användes GitHub för versionshantering. '}

      /* Figma, AndroidStudio, Github, Visual Studio Code, Visual Studio, RaspberryPi?, Nåt m SQL? Tänker verktyg här?  */
      developmenticons ={['icons/FigmaIcon.svg','icons/AndroidStudioIcon.svg','icons/GithubIconPink.svg']}
    />
    </>
  )
}

export default Occento

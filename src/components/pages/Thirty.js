import React from 'react'
import ProjectDetails from '../ProjectDetails'

function Thirty() {
    return (
        <>
        <ProjectDetails headline ="Thirty"
          date = 'Sommaren 2021'
          srcImg_1 ='pictures/ThirtyDiceGame.svg'
          introduction ='Ett mobilspel där du får slå tärningar och ska låsa dem i olika spelomgångar. Hur många poäng kan du få?'
    
          standing_images = {['pictures/ThirtyDiceGame2.svg','pictures/ThirtyDiceGame.svg']}
          laying_images = {[]}
    
          /*assignmentHeadline  as alternative headline for assignmenttext*/
          assignmenttext = {'Denna app skapades i kursen Utveckling av mobila applikationer som andra laboration. '+
          'Uppgiften var att återskapa tärningsspelet Thirty i en mobil applikation. Designen fick man göra själv,'+
          ' men den skulle anpassas efter olika skärmstorlekar. '}
    
          subheadline2 = 'Hur spelar man?'
    
          subtext2 ={'Det finns 10 rundor i spelet, low och sedan från 4 upp till 12. Low innebär att alla kombinationer '+
          'som ger något tal under 4 räknas ihop och ger poäng. För 4 räknas alla kombinationer som summerar till 4 ihop.'+
          ' Du får slå 3 gånger för varje omgång och du får själv välja vilken omgång du vill samla poäng för efter 3 slag.'+
          ' Du kan låsa och gruppera ihop tärningar med hjälp av de olika färgerna.  När man låser en tärning behåller den sitt värde även om du slår tärningarna.'}
    
          /*developmentHeadline  as alternative headline for developmenttext*/
          developmenttext = {'Först designades gränssnittet med hjälp av Figma. Applikationen implementerades sedan i' +
          ' Android studio med programmeringsspråket Java. Under hela utvecklingsperioden användes GitHub för versionshantering. '}
    
          /* Figma, AndroidStudio, Github, Visual Studio Code, Visual Studio, RaspberryPi?, Nåt m SQL? Tänker verktyg här?  */
          developmenticons ={['icons/FigmaIcon.svg','icons/AndroidStudioIcon.svg','icons/GithubIconPink.svg']}
        />
        </>
      )
}

export default Thirty

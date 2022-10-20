import React from 'react'
import ProjectDetails from '../ProjectDetails'

function GreetUp() {
  return (
    <>
        <ProjectDetails headline ="GreetUp"
        date = 'Våren 2022'
        srcImg_1 ='pictures/GreetUp/Login.svg'
        introduction ={'GreetUp är en applikation för att skapa och delta i event nära dig.' +
        ' Skapad med syfte att minska ensamheten för äldre och göra det enklare för dem att hitta nya vänner.'+
        ' Skapa event, delta i event, samla bagdes och gör inlägg i forumet för att starta en konversation om ditt grannskap! '}


        standing_images = {['pictures/GreetUp/Start.svg','pictures/GreetUp/Event.svg','pictures/GreetUp/Badges.svg'
        ,'pictures/GreetUp/Wall.svg']}
        laying_images = {[]}

        assignmenttext = {'På kursen Teknik för sociala medier genomfördes ett  samarbete med Edith Cowan University i Australien.'+
        ' Syftet var att skapa ett socialt medium skulleminska ensamheten bland äldre i Australien.  Marknadsundersökning genomfördes'+
        ' av ECU-studenter medan vi i Umeå agerade utvecklarsida. Paralellt gick kursen Applikationsutveckling för internet, vilket gav' +
        ' min grupp möjligheten att slå ihop projekten i båda kurser till ett enda större projekt. Även här var uppgiften fri men innebar '+
        'ett nära samarbete med ECU samt att en webbapplikation skulle utvecklas.'}

        subheadline2 = 'Hur fungerar appen?'

        subtext2 ={'Applikationen är som sagt designad och utformad för en äldre målgrupp. Vi valde en enkel och säker navigering, lugna färger '+
        'och igenkännbara element. På startsidan kan man bläddra bland event som andra lagt ut nära dig. Man kan också skapa ett eget event, där '+
        'år man välja om man vill att eventet ska vara publikt eller privat. För ett privat event måste man som gäst göra en förfrågan till den person'+
        ' som äger eventet innan  man får mer information om det. När man går på event samlar man på sig badges/brickor, ett inslag av gamification.'+
        ' Till sist kan man även göra inlägg på sin grannskapsvägg. Alla inlägg i närheten av dig kommer upp och du kan kommentera samt gilla dem.'+
        ' På så sätt kan man sprida en känsla av grannskap innan man ens kliver utanför dörren. '}

        developmenttext = {'Först genomfördes förstudier och marknadsundersökning av ECU-studenterna. Efter det skapade vår grupp en prototyp utifrån'+
        ' detta i Figma. Prototypen diskuterades och justeringar gjordes i samråd med ECU. Sedan användes Visual Studio med Entity Framework för att'+
        ' skapa databasen med metoden Code First. Visual studio Code användes för själva webbapplikationen, då denna implementerades med hjälp av React.'+
        ' Under hela utvecklingsprocessen användes GitHub för versionshantering.'}

        /* Figma, AndroidStudio, Github, Visual Studio Code, Visual Studio, RaspberryPi?, Nåt m SQL? Tänker verktyg här?  */
        developmenticons ={['icons/FigmaIcon.svg','icons/visualstudio.svg','icons/GithubIcon.svg']}
    />
  </>
  )
}

export default GreetUp

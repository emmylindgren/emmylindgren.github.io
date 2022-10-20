import React from 'react'
import ProjectDetails from '../ProjectDetails'

function Fridge() {
  return (
    <>
        <ProjectDetails headline ="FridgE"
        date = 'Hösten 2021'
        srcImg_1 ='pictures/MockupFridgeE-start.svg'
        introduction ='En applikation tillhörande ett smart kylskåp. Din hjälpreda i vardagen , planera, laga och njut!'


        standing_images = {['pictures/MockupFridgeE-Inventory.svg','pictures/MockupFridgeE-Recipies.svg']}
        laying_images = {[]}

        assignmenttext = {'Denna prototyp skapades i kursen Människa dator interaktion som en projektuppgift.'+
        ' Det var en fri uppgift som på något sätt skulle involvera Internet Of Things och underlätta vardagen för människor. '}

        subheadline2 = 'Vad gör den?'

        subtext2 ={'Tanken är att applikationen ska kopplas upp mot ett smart kylskåp.'+
        ' Automatiskt ska applikationen uppdateras med vad som finns hemma i kylskåpet, användaren får tips på recept,'+
        ' notifikationer när något håller på att ta slut eller bli dåligt. Den ska också agera hjälpreda vid planering'+
        ' av måltider och automatisk rendering av handlingslista inför dessa. '}

        developmenttext = {'Först genomfördes undersökningar för att se vad nuvarande kylskåps-applikationer saknade' +
        'och vad stora familjer är i behov av. Sedan utvecklades lofi-prototyper som också testades innan HiFi-prototyper färdigställdes. All design genomfördes i Figma.'}

        /* Figma, AndroidStudio, Github, Visual Studio Code, Visual Studio, RaspberryPi?, Nåt m SQL? Tänker verktyg här?  */
        developmenticons ={['icons/FigmaIcon.svg']}
    />
  </>
  )
}

export default Fridge

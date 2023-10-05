import React from 'react'
import ProjectItem from './ProjectItem'
import './ProjectSection.css';
import '../../../App.css';

function ProjectSection() {
  return (
    <div className='projects' id ='projectSection'>
        <div className='headline_project'>
            <h1>Mina projekt</h1>
        </div>
        <div className='project_container'>
            <div className='project_wrapper'>
                <ul className='project_items'>
                <ProjectItem headline ="GreetUp"
                        srcImg_1 ='pictures/GreetUp/Event.svg'
                        srcImg_2 ='pictures/GreetUp/Login.svg'
                        /*srcImg_1 = 'hej.png'
                        srcImg_2 = 'hej.png'*/
                        /*If the pictures should be to the right (every other should be) */
                        picsRight = {true}
                        /*If picture nr 2, srcImg_2, is horisontal or vertically aligned */
                        pic2horisontal = {false}
                        infoText = 'En event-applikation designad för att minska ensamheten bland äldre i Australien.'
                        link = '/GreetUp'
                    />
                    <ProjectItem headline ="OCCENTO"
                        srcImg_1 ='pictures/OccentoMockupStart.png'
                        srcImg_2 ='pictures/OccentoMockupSpel.png'
                        /*srcImg_1 = 'hej.png'
                        srcImg_2 = 'hej.png'*/
                        /*If the pictures should be to the right (every other should be) */
                        picsRight = {false}
                        /*If picture nr 2, srcImg_2, is horisontal or vertically aligned */
                        pic2horisontal = {true}
                        infoText = 'Ett mobilspel där du och dina vänner ska gissa vilken låt texten tillhör. Dina vänner sjunger och du gissar!'
                        link = '/Occento'
                    />
                    <ProjectItem headline ="FridgE"
                        srcImg_1 ='pictures/MockupFridgeE-start.svg'
                        srcImg_2 ='pictures/MockupFridgeE-Inventory.svg'
                        /*srcImg_1 = 'hej.png'
                        srcImg_2 = 'hej.png'*/
                        /*If the pictures should be to the right (every other should be) */
                        picsRight = {true}
                        /*If picture nr 2, srcImg_2, is horisontal or vertically aligned */
                        pic2horisontal = {false}
                        infoText = 'FridgE är en design-prototyp för en app tillhörande ett smart kylskåp.'
                        link = '/Fridge'
                    />
                     <ProjectItem headline ="Thirty"
                        srcImg_1 ='pictures/ThirtyDiceGame.svg'
                        srcImg_2 ='pictures/ThirtyDiceGame2.svg'
                        /*srcImg_1 = 'hej.png'
                        srcImg_2 = 'hej.png'*/
                        /*If the pictures should be to the right (every other should be) */
                        picsRight = {false}
                        /*If picture nr 2, srcImg_2, is horisontal or vertically aligned */
                        pic2horisontal = {false}
                        infoText = 'Ett tärningspel som går ut på att på ett smart sätt låsa tärningar och samla poäng.'
                        link = '/Thirty'
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default ProjectSection

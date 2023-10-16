import React from 'react'
import ProjectItem from './ProjectItem'
import '../../../App.css';
import styles from './ProjectSection.module.css';

function ProjectSection() {
  return (
    <>
        <div className={'mainContainer ' + styles.projectSection} id="projectSection">
            <h2 className='sectionHeading'>Projekt</h2>
        </div>
        <div className={styles.projectItem}>
            <ProjectItem
                headline ="GreetUp"
                srcImg_1 ='pictures/GreetUp/Start.png'
                srcImg_2 ='pictures/GreetUp/Event.png'
                /*If the pictures should be to the right (every other should be) */
                picsRight = {true}
                infoText = 'En event-applikation designad för att minska ensamheten bland äldre i Australien.'
                link = '/GreetUp'
            />
        </div>

        <div className={styles.projectItem}>
            <ProjectItem
                headline ="Occento"
                srcImg_1 ='pictures/Occento/Start.png'
                srcImg_2 ='pictures/Occento/Songs.png'
                /**Can choose only one picture too */
                /*If the pictures should be to the right (every other should be) */
                picsRight = {false}
                infoText = 'Ett mobilspel där du och dina vänner ska gissa vilken låt texten tillhör. Dina vänner sjunger och du gissar!'
                link = '/Occento'
            />
        </div>

        <div className={styles.projectItem}>
            <ProjectItem
                headline ="Chare"
                srcImg_1 ='pictures/Chare/Start.png'
                srcImg_2 ='pictures/Chare/Resultat.png'
                /*If the pictures should be to the right (every other should be) */
                picsRight = {true}
                infoText = 'En ride-share applikation som underlättar samåkning.'
                link = '/'
            />
        </div>

        <div className={styles.projectItem}>
            <ProjectItem headline ="Lab-plant"
                srcImg_1 ='pictures/LabPlant/Start.png'
                /*If the pictures should be to the right (every other should be) */
                picsRight = {false}
                /*If picture nr 2, srcImg_2, is horisontal or vertically aligned */
                infoText = 'Ett system för övervakning och automatiskt vattning av krukväxter!'
                link = '/'
            />
        </div>

        <div className={styles.projectItem}>
            <ProjectItem headline ="Thirty"
                srcImg_1 ='pictures/Thirty/Start.png'
                /*If the pictures should be to the right (every other should be) */
                picsRight = {true}
                infoText = 'Ett tärningspel som går ut på att på ett smart sätt låsa tärningar och samla poäng.'
                link = '/Thirty'
            />
        </div>

    </>
  )
}

export default ProjectSection

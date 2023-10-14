import React from 'react'
import ProjectItem from './ProjectItem'
import './ProjectSection.css';
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
                srcImg_1 ='pictures/GreetUp/GreetUpStart.png'
                srcImg_2 ='pictures/GreetUp/GreetUpComingUp.png'
                /*srcImg_1 = 'hej.png'
                srcImg_2 = 'hej.png'*/
                /*If the pictures should be to the right (every other should be) */
                picsRight = {true}
                /*If picture nr 2, srcImg_2, is horisontal or vertically aligned */
                pic2horisontal = {false}
                infoText = 'En event-applikation designad för att minska ensamheten bland äldre i Australien.'
                link = '/GreetUp'
            />
        </div>
        <div className={styles.projectItem}>
            <ProjectItem
                headline ="GreetUp"
                srcImg_1 ='pictures/GreetUp/GreetUpStart.png'
                /**Can choose only one picture too */
                /*srcImg_1 = 'hej.png'
                srcImg_2 = 'hej.png'*/
                /*If the pictures should be to the right (every other should be) */
                picsRight = {false}
                /*If picture nr 2, srcImg_2, is horisontal or vertically aligned */
                pic2horisontal = {false}
                infoText = 'En event-applikation designad för att minska ensamheten bland äldre i Australien.'
                link = '/GreetUp'
            />
        </div>

    </>
  )
}

export default ProjectSection

import React from 'react';
import styles from './ProjectItem.module.css';
import {Link} from 'react-router-dom';

function ProjectItem(props) {
  return (
      <div className={'mainContainer ' + styles.infoCardSection}>
        <div className={props.picsRight ? styles.projectContainerRight : styles.projectContainerLeft}>
          <div className={styles.textWrapper}>
            <p>{props.infoText}</p>
            <h3>{props.headline}</h3>
            <Link to={props.link} className={styles.projectLink}>Kolla in</Link>
          </div>

          <div className={styles.imageWrapper}>
            <img alt="project" className={styles.projectImg} src={props.srcImg_1}/>
            {props.srcImg_2 ? 
              <img alt="project 2" className={styles.projectImg} src={props.srcImg_2}/>
              : null
            }
          </div>

        </div>
      </div>
  );
}
/**
 * Alternativ om du vill ha en för gemensam senare
 * Annars är infoCardSection för båda så. 
 * `${styles.projectContainer} ${props.picsRight ? styles.projectContainerRight : styles.projectContainerLeft}`
 */
export default ProjectItem;

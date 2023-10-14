import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn,faGithubAlt} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className={styles.footerContainer} id='footerSection'>
        <h2 className={styles.header}>Hör av dig</h2>
        <div className={styles.links}>
            <li className={styles.navItem}>
                <a href="mailto:emmy.lindgren@hotmail.com" rel="noreferrer">
                    <FontAwesomeIcon className={styles.navIcon} icon={faEnvelope} size="2xl" />
                </a>
            </li>
            <li className={styles.navItem}>
                <a target="_blank" href="https://www.linkedin.com/in/emmylindgren/" rel="noreferrer">
                    <FontAwesomeIcon className={styles.navIcon} icon={faLinkedinIn} size="2xl"/>
                </a>
            </li>
            <li className={styles.navItem}>
                <a target="_blank" href="https://github.com/emmylindgren" rel="noreferrer">
                    <FontAwesomeIcon className={styles.navIcon} icon={faGithubAlt} size="2xl" />
                </a>
            </li>
        </div>
    </div>
  )
}

export default Footer

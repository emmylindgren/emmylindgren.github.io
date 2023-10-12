import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footerContainer} id='footerSection'>
        <section className={styles.header}>
            <h2>Hör av dig</h2>
        </section>
        <section className={styles.links}>
            <li className={styles.navItem}>
                <a href="mailto:emmy.lindgren@hotmail.com" className='footer-nav-links-icon' rel="noreferrer">
                    <img src="icons/mailIcon.svg" className={styles.imageIcon} alt="Mail icon"/>
                </a>
            </li>
            <li className={styles.navItem}>
                <a target="_blank" href="https://www.linkedin.com/in/emmylindgren/" className='footer-nav-links-icon' rel="noreferrer">
                    <img src="icons/LinkedinIcon.svg" className={styles.imageIcon} alt="Linkedin icon" />
                </a>
            </li>
            <li className={styles.navItem}>
                <a target="_blank" href="https://github.com/emmylindgren" className='footer-nav-links-icon' rel="noreferrer">
                    <img src="icons/GithubIcon.svg" className={styles.imageIcon} alt="Github icon"/>
                </a>
            </li>
        </section>
    </div>
  )
}

export default Footer

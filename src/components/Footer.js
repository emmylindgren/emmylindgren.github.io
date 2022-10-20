import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container' id='footerSection'>
        <section className='footer-header'>
            <h2>Kontakta mig</h2>
        </section>
        <section className='footer-email'>
            <h3>Mail</h3>
            <a href="mailto:emmy.lindgren@hotmail.com">emmy.lindgren@hotmail.com</a>
        </section>
        <section className='footer-links'>
            <li className='footer-nav-item'>
                <a target="_blank" href="https://www.linkedin.com/in/emmylindgren/" className='footer-nav-links-icon'>
                    <img src="icons/LinkedinIcon.svg" className="footer-imageIcon" alt="Linkedin icon" />
                </a>
            </li>
            <li className='footer-nav-item'>
                <a target="_blank" href="https://github.com/emmylindgren" className='footer-nav-links-icon'>
                    <img src="icons/GithubIcon.svg" className="footer-imageIcon" alt="Github icon"/>
                </a>
            </li>
        </section>
    </div>
  )
}

export default Footer

import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import './Navbar.css';
import cv from './EmmyLindgrenCV.pdf';
import { useNavigate } from 'react-router-dom'; 
import { HashLink as LinkFromOtherPage } from 'react-router-hash-link';


function Navbar() {

    const [click,setClick] = useState(false);
    const [icons,setIcons] = useState(true);

    var homepage = true;

    let navigate = useNavigate()

    const handleClick = ()=> {
        /*Stopping the window from scrolling when menu is open */
        if(!click){
            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = 'unset';
        }
        /*Stopping the window from scrolling when menu is open */
        setClick(!click);
    }
    const closeMobileMenu= ()=> {
        setClick(false);
        document.body.style.overflow = 'unset';
    }

    const showIcons = ()=>{
        if(window.innerWidth <=960){
            setIcons(true)
        }
        else{
            setIcons(false)
        }
    };

    useEffect(()=>{
        showIcons();
    },[]);

    useEffect(()=>{
        updateRoute();
    },[navigate]);

    const updateRoute= ()=> {
        if(window.location.pathname==="/"){
            homepage = true;
        }
        else{
            homepage = false;
        }
    }


    if(window.location.pathname==="/"){
        homepage = true;
    }
    else{
        homepage = false;
    }

    window.addEventListener('resize',showIcons);


  return (
    <>
      <nav className={click ? 'navbar active' : 'navbar'}>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            {/**TODO: Ändra länken här sedan! */}
            <li className='nav-item'>
                <LinkFromOtherPage className='nav-links' onClick={closeMobileMenu} to="./" >
                        Om mig
                </LinkFromOtherPage>
            </li>

            {!homepage && 

                <li className='nav-item'>
                <LinkFromOtherPage className='nav-links' onClick={closeMobileMenu} to="./#educationSection" spy={true} smooth={homepage? true:false} duration={800}>
                        Utbildning
                </LinkFromOtherPage>
                </li>
            }

            {!homepage && 
                <li className='nav-item'>
                <LinkFromOtherPage className='nav-links' onClick={closeMobileMenu} to="./#projectSection" spy={true} smooth={homepage? true:false} duration={1000}>
                        Projekt
                </LinkFromOtherPage>
                </li>
            }

            {homepage && 
                <li className='nav-item'>
                    <Link className='nav-links' onClick={closeMobileMenu} to="educationSection" spy={true} smooth={homepage? true:false} duration={800}>
                            Utbildning
                    </Link>
                </li>
            }

            {homepage && 
                <li className='nav-item'>
                    <Link className='nav-links' onClick={closeMobileMenu} to="projectSection" spy={true} smooth={homepage? true:false} duration={1000}>
                            Projekt
                    </Link>
                </li>
            }


            <li className='nav-item'>
                <a className='nav-links' href={cv} target="_blank" rel="noreferrer">
                    CV
                </a>
            </li>


            {icons && <li className='nav-item'>
                <div className ='nav-item-icon'>
                    <li className='nav-item'>
                        <a target="_blank" href="https://www.linkedin.com/in/emmylindgren/" className='nav-links-icon'  onClick={closeMobileMenu} rel="noreferrer">
                                <img src="icons/LinkedinIcon.svg" className="imageIcon" alt="Linkedin icon" />
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a target="_blank" href="https://github.com/emmylindgren" className='nav-links-icon'  onClick={closeMobileMenu} rel="noreferrer">
                            <img src="icons/GithubIcon.svg" className="imageIcon" alt="Github icon"/>
                        </a>
                    </li>
                </div>
            </li>}
        </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
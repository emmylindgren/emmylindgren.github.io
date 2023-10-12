import React from 'react';
import './InfoCardSection.css';
import '../../../App.css';

function InfoCardSection() {
  return (
    <div className='infocard-background' id="infoCard-Section">
      <div className='infocard-container'>
        <div className='development'>
            <div className="card-icon-wrapper">
              <img className='card-icon' src="icons/ProgrammingIcon.svg" alt="Programmeringsikon"/>
            </div>
            <h2 className='headline'>Utveckling</h2>
            <p className='infotext'>Programmering och utveckling är en stor del av min utbildning 
            och det passar mig perfekt! Jag gillar att skapa saker från grunden, hela vägen upp. </p>
            <h3 className='headlines2'>Språk</h3>
            <p className='text1'>Java, JavaScript, HTML, CSS, C, SQL</p>
            <h3 className='headlines3'>Utvecklingsverktyg</h3>
            <p className='text2'>Visual Studio Code<br/>
                  Visual Studio<br/>
                  Github<br/>
                  Android Studio
              </p>
        </div>
        <hr/>
        <div className='design'>
          <div className="card-icon-wrapper">
            <img className='card-icon' src="icons/DesignIcon.svg" alt="Designikon"/>
          </div>
            <h2 className='headline'>Design</h2>
            <p className='infotext'>Att designa interaktiva och intuitiva gränssnitt 
            är den andra byggstenen i min utbildning. Jag värderar enkel och tydlig design, tillgänglig för alla. </p>
            <h3 className='headlines2'>Jag gillar att designa</h3>
            <p className='text1'>UX, UI, Appar, Ikoner</p>
            <h3 className='headlines3'>Designverktyg</h3>
            <p className='text2'>Figma<br/> 
                      Inkscape<br/>
                      Painter<br/>
                      Adobe XD<br/>
              </p>
        </div>
      </div>
    </div>
  )
}

export default InfoCardSection

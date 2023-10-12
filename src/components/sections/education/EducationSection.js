import React from 'react';
import './EducationSection.css';
import '../../../App.css';

function EducationSection() {
  return (
    <div className='education-container' id="educationSection">
        <h2 className='education-headline'>Min utbildning</h2>
        <div className='education-information'>
          <img className ='education-img' src="icons/computerIconGreen.svg" alt="Computer icon"/>
          <div className='education-text'>
          <p>Jag gillar att lösa kluriga logiska problem, 
              samtidigt som jag är väldigt intresserad av psykologi och kommunikation.</p> 
              <p>Civilingenjörsprogrammet i interaktion och design är en bred civilingenjörsutbildning som 
              behandlar mötet mellan människa och maskin. Att skapa hållbara, intuitiva och smidiga system helt enkelt.</p>
          </div>
        </div>
  </div>
  )
}

export default EducationSection

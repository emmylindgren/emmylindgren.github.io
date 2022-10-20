import React from 'react';
import './HeroSection.css';
import '../App.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-text'>
        <p>Hej! Jag heter Emmy och läser till <br /> civilingenjör inom <br />Interaktion och design.</p>
      </div>
      <img className ='profile-img' src="pictures/profile.png"/>
    </div>
  )
}
export default HeroSection

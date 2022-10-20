import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Hello!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src="icons/GithubIcon.png"
                    text="Jaha detta är github"
                    label="gitittit"
                    path='/'/>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards

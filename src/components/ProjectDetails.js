import React from 'react'
import {Link} from 'react-router-dom';
import './ProjectDetails.css';

function ProjectDetails(props) {
  var standing = props.standing_images !== null;
  var laying = props.laying_images !== null;

  var nrOfImages = props.standing_images.length;

  if(laying){
    nrOfImages += props.laying_images.length;
  }
  
  return (
    <>
    <div className='detail_wrapper'>
      <div className='detail_header'>
        <div className='detail_headertext'>
          <h2 className='project_headline'>{props.headline}</h2>
          <p>{props.date}</p>
        </div>
        <div className='header_intro'>
            <div>
                <img alt="project" className='project_image' src={props.srcImg_1}/>
            </div>
            <p>{props.introduction}</p>
          </div>
      </div>

        <h3>Bilder</h3>

        <div className={(nrOfImages < 4 )? 'image_scroller snaps-inline centered':'image_scroller snaps-inline' }>
           
            {standing ? 
                props.standing_images.map(element => {
                  return <div className='scroller_element vertical'><img src= {element}/></div>;
                }):''
            }

            {laying ? 
                props.laying_images.map(element => {
                  return <div className='scroller_element horisontal'><img src= {element}/></div>;
                }):''
            }

        </div>

        <div className='information_wrapper'>
          <div className='information_text'>
            <h3>
              {props.assignmentHeadline ? props.assignmentHeadline : 'Vad var uppgiften?'}
            </h3>
            <p>{props.assignmenttext}</p>

          </div>

          <div className='information_text'>
            <h3>
              {props.subheadline2}
            </h3>
            <p>{props.subtext2}</p>

          </div>

          <div className='information_text last'>

            <h3>
              {props.developmentHeadline ? props.developmentHeadline : 'Utvecklingsprocessen'}
            </h3>
            <p>{props.developmenttext}</p>

            <div className='development_icons'>
              {
                props.developmenticons.map(element => {
                  return <img src= {element} className='development_icon'/>;
                })
              }
            </div>

          </div>

        </div>
  
    </div> 
    </>
  )
}

export default ProjectDetails

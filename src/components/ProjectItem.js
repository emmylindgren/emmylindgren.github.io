import React from 'react';
import {Link} from 'react-router-dom';

function ProjectItem(props) {
  return (
    <>
        <li className={props.picsRight ? 'project_container_right' : 'project_container_left'}>
        
                <div className={props.pic2horisontal ? 'img_container_horisontal' : 'img_container_vertical'}>
                <h2 className='project_headline'>{props.headline}</h2>
                  <div className='project_img1'>
                    <img alt="project"  src={props.srcImg_1}/>
                  </div>
                  <div className='project_img2'>
                    <img alt="project 2" src={props.srcImg_2}/>
                  </div>
                  <p className='project_infotext'>{props.infoText}</p>
                  <Link to={props.link} className='project_link'>Se mer</Link>
                </div>    
        </li> 
    </>
  );
}

export default ProjectItem;

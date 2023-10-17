import React from 'react';
import styles from './ProjectDetails.module.css';

/**
 * @param {*} props | 
 *        Title
 *        dateText = When in time project was made. 
 *        fieldText = Designed, implemented? Both? One? 
 *        header_images = List of src to pictures being displayed in header. 2 or 3. 
 *        header_color = number 1-4 saying which color header should have. According to order at starting page. 
 * 
 *        children = what to display at page. 
 *  
 * Children are expected to be surrounding div with h3 heading and p-text, followed by optional icons. 
 * When adding icons to a child, surround with div with className={styles.icons}.
 * The first child will be centered at it's place in page and is thought of as an introduction, is best without heading. 
 */
function ProjectDetails(props) {
  /*
  TODO: Add images at the bottom. Take names as a prop? 
  var standing = props.standing_images !== null;
  var laying = props.laying_images !== null;

  var nrOfImages = props.standing_images.length;

  if(laying){
    nrOfImages += props.laying_images.length;
  }*/
  
  return (
    <>
      <div className={styles.headerWrapper} id={styles[props.header_color]}>
        <div className={'mainContainer ' + styles.header}>
          <div className={styles.titleContainer}>
            <h1>{props.title}</h1>
            <h2>{props.dateText}</h2>
            <p>{props.fieldText}</p>
          </div>

          <div className={styles.imageContainer}>
            {props.header_images.map(element => 
              { return <img src= {element} alt='headerImage'/>;})
            }
          </div>
        </div>

      </div>
      <div className={'mainContainer'}>
        <div className={styles.children}>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default ProjectDetails

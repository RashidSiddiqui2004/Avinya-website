import React from 'react';
import styles from './intro_style.module.css';

function IntroFunc() {
  return (
    <div className={styles.box} id='about'>
      <div className={styles.overlap_group}>
        <div className={styles.rectangle_1} />
        <div className={styles.avinya}>
          Avinya<br/>2024
        </div>
        <p className={styles.intro_text}>
        AVINYA, the annual flagship event of Devcomm NSUT, is set to captivate tech enthusiasts with in a week-long tech fest spanning from January 18th to 21st, 2024, at NSUT's main campus. It will be an opportunity to dive into a world of mind-bending tech competitions, including a 24-hour themed hackathon, blind coding challenge, eSports, graphic designing, and a plethora of other engaging activities. Beyond the tech realm, the fest promises to be a vibrant celebration with entertaining events like DJ Nights and stand-up comedy featuring some of India's top artists.
        </p>
        <div className={styles.rectangle_1} />
        <div className={styles.rectangle_2} />
        <div className={styles.rectangle_3} />
        <div className={styles.rectangle_4} />
      </div>
    </div>
  );
}

export default IntroFunc;



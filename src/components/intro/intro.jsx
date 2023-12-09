import React from 'react';
import styles from './intro_style.module.css';

function IntroFunc() {
  return (
    <div className={styles.box}>
      <div className={styles.overlap_group}>
        <div className={styles.rectangle_1} />
        <div className={styles.avinya}>
          Avinya
        </div>
        <div className={styles.avinya_year}>
          2024
        </div>
        <p className={styles.intro_text}>
          Yesterday’s body count lottery rounded out to a solid ‘n’ sturdy thirty! Yesterday’s body count lottery
          rounded out to a solid ‘n’ sturdy thirty! Yesterday’s body count lottery rounded out to a solid ‘n’ sturdy
          thirty! Yesterday’s body count lottery rounded out to a solid ‘n’ sturdy thirty! Yesterday’s body count
          lottery rounded out to a solid ‘n’ sturdy thirty! Yesterday’s body count lottery rounded out to a solid ‘n’
          sturdy thirty!
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



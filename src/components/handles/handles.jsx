import React from 'react';
import styles from './handles.module.css';

const joinButton = ({CTA}) => {
  return (
    <div className={styles.container}>
    <h1 className={styles.heading}>JOIN OUR DISCORD SERVER TO STAY UPDATED</h1>
    <button className={styles.button} role="button">
      {CTA}
    </button>
    </div>
  );
};
export default joinButton;
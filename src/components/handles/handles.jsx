import React from "react";
import styles from "./handles.module.css";

const joinButton = ({ CTA }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        JOIN OUR DISCORD SERVER TO STAY UPDATED
      </h1>
      <div className="pointer" target="_blank" style={{ margin: "auto" }}>
        <a
          href="https://discord.gg/hhHtDXCBpn"
          target="_blank"
          rel="noreferrer"
          cl
        >
          <button className={styles.button}>
            <p className={styles.p}>JOIN</p>
          </button>
        </a>
      </div>
    </div>
  );
};
export default joinButton;

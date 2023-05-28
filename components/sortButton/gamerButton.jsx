import React from 'react'
import styles from "@/styles/button.module.css";

const GamerButton = ({sortValue}) =>{
  return (
    <div>
      <div className={styles.container_button}>
        <button className={styles.sort_button} onClick={sortValue}>Sort</button>
      </div>
    </div>
  );
}
export default GamerButton

import React from "react";
import styles from "../Personal/Personal.module.css";

function Personal() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={styles.main}>
      {/* <div className={styles.container}>
        <div className={styles.container_cards}>
          {data.map((item) => (
            <div className={styles.container_card}>{item}</div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Personal;

import React, { useState, useEffect } from "react";
import styles from "@/styles/post2.module.css";
import Image from "next/image";
import { pictureData } from "@/components/utils";
import GamerCount from "@/components/gamers/gamerCount";

const Game = () => {
  const [point, setPoint] = useState(0);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [listGame, setListGame] = useState([{ key: value, value: point }]);
  console.log(listGame);

  const checkPictures = (e) => {
    setCount((prev) => prev + 1);
    if (e.currentTarget.id === pictureData[count]?.name) {
      setPoint(point + 1);
    } else {
      setPoint(point - 1);
    }
  };

  useEffect(() => {
    if (count === 10) {
      setCount(0);

      setListGame(listGame.concat({ key: value, value: point }));
      setValue("");
      setPoint(0);
    }
  }, [count]);

  return (
    <div className={styles.container}>
      <div className={styles.img_block}>
        <img className={styles.img} src={pictureData[count]?.img} alt="" />
      </div>
      <div className={styles.buttons}>
        <button id="picture" onClick={checkPictures} className={styles.button}>
          Picture
        </button>
        <button id="peint" onClick={checkPictures} className={styles.button}>
          Peinter
        </button>
      </div>
      <div className={styles.points}>
        <p>Your Points {point}</p>
      </div>
      <div className={styles.input_block}>
        <input className={styles.input} type="text" placeholder="add name" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <div className={styles.name_table}>
        <GamerCount listGame={listGame} />
      </div>
    </div>
  );
};
export default Game;

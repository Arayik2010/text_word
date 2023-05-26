import React, { useState,useEffect } from "react";
import styles from "@/styles/post2.module.css";
import Image from "next/image";


const pictureData = [
  {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    name: "picture",
  },
  {
    id: 2,
    img: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    name: "peint",
  },
  {
    id: 3,
    img: "https://s.studiobinder.com/wp-content/uploads/2021/01/Best-Black-and-white-pictures.jpg",
    name: "picture",
  },
  {
    id: 4,
    img: "https://live.staticflickr.com/65535/17123251389_80282733ce_z.jpg",
    name: "peint",
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJcsEeSJh4Raz1_-R4Q61MmU9Zte9q_8wx3A&usqp=CAU",
    name: "peint",
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vuH7A4IRdbv66cEVHJElXIzsvbxTerHdHA&usqp=CAU",
    name: "picture",
  },
  {
    id: 7,
    img: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    name: "picture",
  },
  {
    id: 8,
    img: "https://ichef.bbci.co.uk/news/999/cpsprodpb/4281/production/_126552071_10.jpg",
    name: "peint",
  },
  {
    id: 9,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vuH7A4IRdbv66cEVHJElXIzsvbxTerHdHA&usqp=CAUhttps://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg",
    name: "picture",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    name: "peint",
  },
];

const Post2 = (e) => {
  const [point, setPoint] = useState(0);
  const [count, setCount] = useState(0);
  const [value,setValue] = useState('');
  const [nameGamer,setNameGamer] = useState([])
  const [finishPoint,setFinishPoint] = useState(0)

  const checkPictures = (e) => {
    setCount((prev) => prev + 1);
    if (e.currentTarget.id === pictureData[count]?.name) {
      setPoint(point + 1);
    } else {
      setPoint(point - 1);
    }
  };

  useEffect(()=>{
    if(count === 9) {
      setFinishPoint(point)
     
      
    }
  },[count])

 

  const addName = () => {
    setNameGamer(nameGamer.concat(value))
  }

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
      <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick ={addName}>add</button>
        {nameGamer.map((el,index) =>(
          <div key={index}>
            <p>{el} {finishPoint}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Post2;

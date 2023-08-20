import React, { useState } from "react";
import styles from "../../styles/table.module.css";
import GamerButton from "../sortButton/gamerButton";

const GamerCount = ({ listGame }) => {

 const [sort,setSort] = useState(false)
 const [sortId,setSortId] = useState(false)

  const sortValue = () =>{
    setSort((prev) =>!prev);
    setSortId(true)
  return listGame.sort((p1, p2) => (p1.value < p2.value? 1 : p1.value > p2.value ? -1 : 0));
  
  }

  return (
    <div>
     <GamerButton sortValue ={sortValue}/>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.tr}>
            <th className={styles.th} scope="col">
              Player
            </th>
            <th className={styles.th} scope="col">
              Unit
            </th>
            <th className={styles.th} scope="col">
              Gamer Id
            </th>
          </tr>
          {listGame.map((el, index) =>
            el.key ? (
              <tr className={styles.tr} key={index}>
                <th className={styles.th} scope="row">
                  {el.key}
                </th>
                <td className={styles.td}>{el.value}</td>
                <td className={styles.td}>{sortId? index + 1 : index}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GamerCount;

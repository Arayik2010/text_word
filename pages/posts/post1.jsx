import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Select from "react-select";
import { useCallback } from "react";

const Post1 = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");

  const [wrong, setWrong] = useState(false);

  const options = [
    {
      label: ". . . . .",
      value: ". . . . .",
    },
    {
      label: "simply",
      value: "simply",
    },
    {
      label: "loren",
      value: "loren",
    },
    {
      label: "book",
      value: "book",
    },
  ];
  console.log('hello');

  const checkText = () => {
    if (
      inputValue1 === "simply" &&
      inputValue2 === "loren" &&
      inputValue3 === "book"
    ) {
      setWrong(false);
      alert("okkk");
    } else {
      setWrong(true);
    }
  };

  const repeat = () => {
    setInputValue1("");
    setInputValue2("");
    setInputValue3("");
    setWrong(false);
    
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <span className={styles.text}>
          Lorem Ipsum is{" "}
          <select
            defaultValue={"DEFAULT"}
            className={wrong ? styles.select_wrong : styles.select}
            onChange={(e) => setInputValue1(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          dummy text of the printing and typesetting industry.{" "}
          <select
            defaultValue={"DEFAULT"}
            className={wrong ? styles.select_wrong : styles.select}
            onChange={(e) => setInputValue2(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen{" "}
          <select
            defaultValue={"DEFAULT"}
            className={wrong ? styles.select_wrong : styles.select}
            onChange={(e) => setInputValue3(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          . It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </span>
      </div>
      <button onClick={checkText}>chack</button>
      <button onClick={repeat}>Please Repeat</button>
    </div>
  );
};
export default Post1;

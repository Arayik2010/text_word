import React, { useEffect, useState } from "react";

const Post3 = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [userAge, setUserAge] = useState(0);

  const requestData = async () => {
    const response = await fetch("http://localhost:3001/user");
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    requestData();
  }, []);
  console.log(data);

  const sendValueUser = async () => {
     await fetch("http://localhost:3001/user", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: Math.floor(Math.random() * 100),
          name: value,
          age: userAge,
        }),
      });
    
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ id: Math.floor(Math.random() * 100), name: value, age: userAge }),
    // };
    // fetch("http://localhost:3001/user", requestOptions);
    requestData();
  };
  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <input type="number" value={userAge} onChange={(e) => setUserAge(e.target.value)} />
      <button onClick={sendValueUser}>add user</button>
      {data?.map((el) => (
        <div key={el.id}>
          <h1>{el.name}</h1>
          <p>{el.age}</p>
        </div>
      ))}
    </div>
  );
};
export default Post3;

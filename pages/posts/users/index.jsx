import React, { useEffect, useState } from "react";
import styles from "../../../styles/post3.module.scss";
import Box from "../../../components/Molecules/Box";
import FileCollectionTitle from "@/components/Molecules/FileCollectionTitle";
import { requestData } from "@/components/Utils/utils";
import dynamic from "next/dynamic";
import Link from "next/link";

const Graph = dynamic(() => import("@/components/Organism/Graph/graph"), {
  ssr: false,
});

export async function getServerSideProps() {
  const res = requestData();
  const data = await res;

  return { props: { userData: data } };
}

const UsersProfile = ({ userData }) => {
  const [data, setData] = useState(userData || []);
  const [value, setValue] = useState("");
  const [userCurrency, setUserCurrency] = useState("");

  const sendValueUser = async () => {
    try {
      await fetch("http://localhost:3001/user", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: Math.floor(Math.random() * 100),
          name: value,
          currency: userCurrency,
          createData: new Date(),
        }),
      });
      setData(await requestData());
      setValue("");
      setUserCurrency("");
    } catch (error) {
      console.log(error);
    }

    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ id: Math.floor(Math.random() * 100), name: value, age: userAge }),
    // };
    // fetch("http://localhost:3001/user", requestOptions);
  };

  const deleteRecord = async (id) => {
    await fetch(`http://localhost:3001/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_inputs}>
        <input
          className={styles.name_input}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          className={styles.age_input}
          type="number"
          value={userCurrency}
          onChange={(e) => setUserCurrency(e.target.value)}
        />

        <button className={styles.add_button} onClick={sendValueUser}>
          add user
        </button>
      </div>
      <div className="w-">
        <FileCollectionTitle
          title="User Graph"
          classes={"text-[#535454] font-medium max-w-3xl  pl-4 m-auto"}
        />
        <Box>
          <Graph dataUser={data} />
        </Box>
        <FileCollectionTitle
          title="User Data"
          classes={"text-[#535454] font-medium max-w-3xl  pl-4 m-auto"}
        />

        <Box>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.tr}>
                <th className={styles.th} scope="col">
                  User
                </th>
                <th className={styles.th} scope="col">
                  Currency
                </th>
                <th className={styles.th} scope="col">
                  User Id
                </th>
                <th className={styles.th} scope="col">
                  Action
                </th>
              </tr>
              {data.map((el) => (
                <tr className={styles.tr} key={el.id}>
                  <th className={styles.th} scope="row">
                    <Link href={`/posts/users/${el.id}`}>{el.name}</Link>
                  </th>
                  <td className={styles.td}>{el.currency}</td>
                  <td className={styles.td}>{el.id}</td>
                  <td className={styles.td}>
                    <button
                      onClick={() => deleteRecord(el.id)}
                      className={styles.button}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </div>
    </div>
  );
};
export default UsersProfile;

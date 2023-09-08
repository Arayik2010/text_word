import React, { useEffect, useState } from "react";
import styles from "../../../styles/post3.module.scss";
import Box from "../../../components/Molecules/Box";
import FileCollectionTitle from "../../../components/Molecules/FileCollectionTitle";
import { requestData, updateDataFormat } from "../../../components/Utils/utils";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Layout } from "../../../components/Layouts/layout";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { apiIstance } from "../../../components/Api/ApiInstance";
import UserModal from "../../../components/Modal/modal";

const Graph = dynamic(
  () => import("../../../components/Organism/Graph/graph"),
  {
    ssr: false,
  }
);

export async function getServerSideProps() {
  const res = requestData();
  const data = await res;

  return { props: { userData: data } };
}

const UsersProfile = ({ userData }) => {
  const [data, setData] = useState(userData || []);
  const [value, setValue] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [userCurrency, setUserCurrency] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [chunkData, setChunkData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteOpenModal, setDeleteOpenModal] = useState(false);
  let pageSize = 5;

  const chunk = data.reduce(
    (acc, _, i) =>
      i % pageSize ? acc : [...acc, data && data.slice(i, i + pageSize)],
    []
  );

  useEffect(() => {
    setPageCount(Math.ceil(data.length / pageSize));
    const dataChunk = chunk[activePage - 1];
    setChunkData(dataChunk);
  }, [activePage, data]);


  const closeModal = () => {
    setIsOpen(false);
  };

  const closeDeleteModal = () => {
    setDeleteOpenModal(false);
  };

  const addUserData = async () => {
    try {
      await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/user", {
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
      setIsOpen(true)
      setData(await requestData())
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
  const handleRequestCloseModal = async() =>{
    addUserData()
    setIsOpen(false)
    setData(await requestData());
  }

  const deleteRecord = async (id) => {
    try {
      await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/user/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((res) => setData(res));
      setDeleteOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const searchDataUser = async (userName) => {
    await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/user?name=${userName}`)
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

        <button className={styles.add_button} onClick={addUserData}>
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
          <input
            className={styles.search_input}
            placeholder="search..."
            type="text"
            onChange={(e) => searchDataUser(e.target.value)}
          />
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
                  Update at
                </th>
                <th className={styles.th} scope="col">
                  Action
                </th>
              </tr>
              {chunkData &&
                chunkData.map((el) => (
                  <tr className={styles.tr} key={el.id}>
                    <th className={styles.th} scope="row">
                      <Link href={`/posts/users/${el.id}`}>{el.name}</Link>
                    </th>
                    <td className={styles.td}>{el.currency}</td>
                    <td className={styles.td}>
                      {updateDataFormat(el.createData)}
                    </td>
                    <td className={styles.td}>
                      <button
                        onClick={() => setDeleteOpenModal(el)}
                        className={styles.button}
                      >
                        Delete
                      </button>
                      <Link
                        className="ml-2"
                        href={`/posts/users/edit/${el.id}`}
                      >
                        <button className={styles.button}>Details</button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Stack spacing={2}>
            <Pagination
              onClick={(e) => {
                setActivePage(+e.target.innerText);
              }}
              count={pageCount}
              shape="rounded"
            />
          </Stack>
        </Box>
      </div>
      <UserModal
        success
        onlyConfirmButton={true}
        // handlerRequest={() =>handleRequestCloseModal()}
        modalIsOpen={modalIsOpen}
        contentTitle={`User ${value} will add in list`}
        closeModal={closeModal}
      />
      <UserModal
        showHandleButtons={true}
        id={'0'}
        handlerRequest={() => deleteRecord(deleteOpenModal.id)}
        modalIsOpen={!!deleteOpenModal}
        contentTitle={`User deleted from list`}
        closeRequestModal={closeDeleteModal}
        handleDeleteButton={"Delete"}
        handleDeclineButton={"Cansel"}
        deleteButtonClass="px-10 py-2 bg-red-500 text-white"
        declineButtonClass="px-10 py-2 border-black  text-black"
      />
    </div>
  );
};

UsersProfile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default UsersProfile;

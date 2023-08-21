import { Layout } from '../../../../components/Layouts/layout';
import React, { useState } from 'react'
import styles from "../../../../styles/post3.module.scss";
import { useRouter } from 'next/router';
import { apiIstance } from '../../../../components/Api/ApiInstance';
import BackFileCollection from '../../../../components/Molecules/BackFileCollection';
import UserModal from '../../../../components/Modal/modal';
import Box from '../../../../components/Molecules/Box';

export const getStaticPaths = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/user");
  const dataItems = await res.json();
  console.log(dataItems, "hhh");

  const paths = dataItems.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const requestItem = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/user/${id}`);
  const responseItem = await requestItem.json();

  return { props: { userData: responseItem } };
};

export default function UpdateUser({userData}) {

  const [value, setValue] = useState(userData.name);
  const [userCurrency, setUserCurrency] = useState(userData.currency);
  const [userUpdateModal, setUserUpdateModal] = useState(false)
  const router = useRouter()

  const updateUserData = async() =>{
    try {
      await fetch(apiIstance.baseUrl + `/user/${router.query.id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: +router.query.id,
          name: value,
          currency: userCurrency,
          createData: userData.createData,
        }),
        
      });
      setUserUpdateModal(true)
    } catch (error) {
      console.log(error);
    }
    // router.push('/posts/users')
  }
  const closeUpdateModal = () =>{
    setUserUpdateModal(false)
    router.push('/posts/users')
  }
  return (
    <div className={styles.container}>
        <BackFileCollection title="Custom User Data" href="/posts/users" />
      <div className={styles.container_inputs}>
        <Box>
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

        <button className={styles.add_button} onClick={updateUserData} >
          Update user
        </button>
        </Box>
       
      </div>
      <UserModal
        modalIsOpen={userUpdateModal}
        contentTitle={`User ${value} update your data`}
        closeModal={closeUpdateModal}
      />
    </div>
  )
}

UpdateUser.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

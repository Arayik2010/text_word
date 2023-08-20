import React from "react";
import Box from "../../../components/Molecules/Box";
import styles from "../../../styles/post3.module.scss";
import BackFileCollection from "../../..//components/Molecules/BackFileCollection";
import { Layout } from "../../..//components/Layouts/layout";
import { updateDataFormat } from "../../..//components/Utils/utils";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3001/user");
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
  const requestItem = await fetch(`http://localhost:3001/user/${id}`);
  const responseItem = await requestItem.json();

  return { props: { userData: responseItem } };
};

const UserItem = ({ userData }) => {
  return (
    <div>
      <BackFileCollection title="Custom User Data" href="/posts/users" />
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
                Update at
              </th>
              <th className={styles.th} scope="col">
                Action
              </th>
            </tr>
            <tr className={styles.tr}>
              <th className={styles.th} scope="row">
                {userData.name}
              </th>
              <td className={styles.td}>{userData.currency}</td>
              <td className={styles.td}>
                {updateDataFormat(userData.userData)}
              </td>
              <td className={styles.td}></td>
            </tr>
          </tbody>
        </table>
      </Box>
    </div>
  );
};
UserItem.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default UserItem;

import { FC, useEffect, useState } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";

import { Link } from "react-router-dom";
import firebase, { db } from "Firebase";
import * as functions from "firebase-functions";
import admin from "firebase-admin";

const SettingsView: FC = () => {
  // const [list, setList] = useState<valueType>();
  const [list, setList] = useState<firebase.firestore.DocumentData>();

  useEffect(() => {
    //データ取得
    const getData = async () => {
      const colRef = db
        .collection("members")
        .orderBy("createdAt", "desc")
        .limit(10);
      const snapshots = await colRef.get();
      const docs = snapshots.docs.map((doc) => doc.data());
      setList(docs);
    };

    void getData();
  });

  return (
    // <Page
    //   className={classes.root}
    //   title="Settings"
    // >
    //   <Container maxWidth="lg">
    //     <Notifications />
    //     <Box mt={3}>
    //       <Password />
    //     </Box>
    //   </Container>
    // </Page>
    <Container maxWidth="lg">
      <Box mt={3}>
        <div className="container">
          <h3 className="text-center my-5">一覧表示</h3>
          <div className="my-3">
            <Link to="/app/settings/create">新規登録</Link>
            <table className="table">
              <tbody>
                {list === undefined ? (
                  <tr>
                    <td>NO DATA</td>
                  </tr>
                ) : (
                  list.map((item: firebase.firestore.DocumentData) => (
                    <tr key={item.docId + String(new Date())}>
                      <td>{item.docId}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>
                        <Link to={`/Detail/${item.docId}`}>詳細</Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default SettingsView;

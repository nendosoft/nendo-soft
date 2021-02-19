import { FC, useEffect, useState } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";

import { Link } from "react-router-dom";
import firebase, { db } from "Firebase";
import * as functions from "firebase-functions";
import admin from "firebase-admin";
import classes from "*.module.css";

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

    // const getData = async () => {
    //   const colRef = db.collection("members").doc("WnQvYfbCbiRMfD2CgkW8");
    //   const snapshots = await colRef.get();
    //   const docs = snapshots.data();
    //   setList(docs);
    // };

    void getData();
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      // backgroundColor: theme.palette.background.dark,
      // minHeight: "100%",
      // paddingBottom: theme.spacing(3),
      // paddingTop: theme.spacing(3),
      border: "solid 1px #000000",
      padding: theme.spacing(1),
    },
    collaspe: {
      borderCollapse: "collapse",
    },
  }));
  const classes = useStyles();

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
            <table className={"table" + " " + classes.collaspe}>
              <tbody>
                {list === undefined ? (
                  <tr>
                    <td>NO DATA</td>
                  </tr>
                ) : (
                  list.map((item: firebase.firestore.DocumentData) => (
                    <tr key={item.docId + String(new Date())}>
                      <td className={classes.root}>{item.docId}</td>
                      <td className={classes.root}>{item.name}</td>
                      <td className={classes.root}>{item.email}</td>
                      <td className={classes.root}>
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

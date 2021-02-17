import React from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Page from "components/Page";
import Notifications from "./Notifications";
import Password from "./Password";

import { Link } from "react-router-dom";
import firebase, { db } from "Firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.dark,
    backgroundColor: "#F4F6F8",
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const SettingsView = () => {
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
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default SettingsView;

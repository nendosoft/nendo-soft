import React from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={3}>
        <div className="container">
          <h3 className="text-center my-5">新規作成</h3>
          <div className="text-right my-3">
            <Link to="/app/settings">一覧へ戻る</Link>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default Create;

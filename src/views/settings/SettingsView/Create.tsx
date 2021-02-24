import React from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import { Form, FormGroup, Label, Input, Button, FormFeedback } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import firebase, { db } from "Firebase";

const Create = () => {
  const navigate = useNavigate();

  type valueType = {
    name: string;
    email: string;
  };

  //登録ボタンが押されたら
  const handleOnSubmit = (values: valueType) => {
    const docId = db.collection("members").doc().id;
    db.collection("members")
      .doc(docId)
      .set({
        docId: docId,
        name: values.name,
        email: values.email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });

    //登録後、Topに移動
    navigate("/app/settings");
  };

  return (
    // <Container maxWidth="lg">
    //   <Box mt={3}>
    //     <div className="container">
    //       <h3 className="text-center my-5">新規作成</h3>
    //       <div className="text-right my-3">
    //         <Link to="/app/settings">一覧へ戻る</Link>
    //       </div>
    //     </div>
    //   </Box>
    // </Container>
    <Container maxWidth="lg">
      <Box mt={3}>
        <div className="container">
          <h3 className="text-center my-5">新規作成</h3>
          <div className="text-right my-3">
            <Link to="/app/settings">一覧へ戻る</Link>
          </div>
          <Formik
            initialValues={{ name: "", email: "" }}
            onSubmit={(values) => handleOnSubmit(values)}
            validationSchema={Yup.object().shape({
              name: Yup.string().required("氏名は必須です。"),
              email: Yup.string()
                .email("emailの形式ではありません。")
                .required("Emailは必須です。"),
            })}
          >
            {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="name">氏名</Label>
                  {/* <Input type="text" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} invalid={Boolean(touched.name && errors.name)} /> */}
                  <Input type="text" name="name" id="name" value={values.name} onChange={handleChange} invalid={Boolean(touched.name && errors.name)} />
                  <FormFeedback>{errors.name}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  {/* <Input type="email" email="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} invalid={Boolean(touched.email && errors.email)} /> */}
                  <Input type="email" email="email" id="email" value={values.email} onChange={handleChange} invalid={Boolean(touched.email && errors.email)} />
                  <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>
                <Button type="submit">登録</Button>
              </Form>
            )}
          </Formik>
        </div>
      </Box>
    </Container>
  );
};

export default Create;

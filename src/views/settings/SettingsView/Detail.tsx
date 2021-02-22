import { FC, useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button, FormFeedback } from "reactstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import firebase, { db } from "Firebase";

const Detail: FC = () => {
  const navigate = useNavigate();
  const [member, setMember] = useState<firebase.firestore.DocumentData>();
  const { docId } = useParams();
  // state = {
  //   member: { name: "", email: "" },
  // };

  type valueType = {
    name: string;
    email: string;
  };

  // 更新ボタン押下
  const handleOnSubmit = (values: valueType) => {
    db.collection("members")
      // .doc(this.props.match.params.uid)
      .doc(docId)
      .update({
        name: values.name,
        email: values.email,
      });

    navigate("/app/settings");
  };

  // 指定したメンバー取得
  const getMember = async (docId: string) => {
    const docRef = db.collection("members").doc(docId);
    const doc = await docRef.get();
    // ドキュメントの存在確認
    if (doc.exists) {
      // this.setState({member: doc.data(),});
      setMember(doc.data());
      console.log(doc);
    } else {
      navigate("/404");
    }
  };

  // 指定したメンバー削除
  const handleDelete = (uid: string) => {
    if (window.confirm("削除しますか？")) {
      db.collection("members")
        .doc(uid)
        .delete();

      navigate("/app/settings");
    }
  };

  //値を取得
  useEffect(() => {
    getMember(docId);

    return () => {
      console.log("unmount !");
    };
  }, []);

  return (
    <div className="container">
      <h3 className="text-center my-5">詳細・編集</h3>
      <div className="text-right my-3">
        <Link to="/app/settings">一覧へ戻る</Link>
      </div>
      <Formik
        enableReinitialize
        initialValues={{ name: member?.name, email: member?.email }}
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
              <Input type="text" name="name" id="name" value={values.name} />
              <FormFeedback>{errors.name}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              {/* <Input type="email" email="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} invalid={Boolean(touched.email && errors.email)} /> */}
              <Input type="email" email="email" id="email" value={values.email} />
              <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>
            <Button type="submit" color="success">
              更新
            </Button>
          </Form>
        )}
      </Formik>
      <div className="my-3">
        <Button color="danger" onClick={() => handleDelete(docId)}>
          削除
        </Button>
      </div>
    </div>
  );
};

export default Detail;

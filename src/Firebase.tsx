import firebase from "firebase/app";
import "firebase/firestore";
// import * as admin from "firebase-admin";
import admin from "firebase-admin";
import serviceAccount from "nendo-soft-firebase-adminsdk.json";

const firebaseConfig = {
  apiKey: "AIzaSyBk8GTmk6ZZuGt-6Rxf-5QcjGmikC0WXxg",
  authDomain: "nendo-soft.firebaseapp.com",
  projectId: "nendo-soft",
  storageBucket: "nendo-soft.appspot.com",
  messagingSenderId: "704213837750",
  appId: "1:704213837750:web:4fa110c63655a2c0ec0317",
  measurementId: "G-2CLHEN6VHH",
};

// firebase.initializeApp(firebaseConfig);
// admin.initializeApp();

firebase.initializeApp(firebaseConfig);
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
// });

export default firebase;
export const db = firebase.firestore();
// export const db = admin.firestore();

import firebase from "firebase/app";
import "firebase/firestore";
import * as admin from "firebase-admin";

const firebaseConfig = {
  apiKey: "AIzaSyBk8GTmk6ZZuGt-6Rxf-5QcjGmikC0WXxg",
  authDomain: "nendo-soft.firebaseapp.com",
  projectId: "nendo-soft",
  storageBucket: "nendo-soft.appspot.com",
  messagingSenderId: "704213837750",
  appId: "1:704213837750:web:4fa110c63655a2c0ec0317",
  measurementId: "G-2CLHEN6VHH",
};

firebase.initializeApp(firebaseConfig);
// admin.initializeApp();

export default firebase;
export const db = firebase.firestore();

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxQY0GAcTO2C102gM8vHzDSLN7-DAt4F0",
  authDomain: "tenedores-7ee58.firebaseapp.com",
  databaseURL: "https://tenedores-7ee58.firebaseio.com",
  projectId: "tenedores-7ee58",
  storageBucket: "tenedores-7ee58.appspot.com",
  messagingSenderId: "918784528965",
  appId: "1:918784528965:web:24ed5f39f6a249d4e4092c",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

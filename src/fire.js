import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkiHws7RZEiCmHHd6Sqb7Zq0JDFZIm7dc",
  authDomain: "product-or-samat.firebaseapp.com",
  projectId: "product-or-samat",
  storageBucket: "product-or-samat.appspot.com",
  messagingSenderId: "270753435",
  appId: "1:270753435:web:a0ce0722833cdff6c9703e",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;

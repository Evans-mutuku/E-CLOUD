import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBjRddKP7qmcLp5tH-VXlVSwq2xSljvido",
  authDomain: "auth-upload-32044.firebaseapp.com",
  databaseURL: "https://auth-upload-32044-default-rtdb.firebaseio.com",
  projectId: "auth-upload-32044",
  storageBucket: "auth-upload-32044.appspot.com",
  messagingSenderId: "295248225975",
  appId: "1:295248225975:web:2ba19fd0795b174ce18f32",
  measurementId: "G-ML2Z15NDFT",
});

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };

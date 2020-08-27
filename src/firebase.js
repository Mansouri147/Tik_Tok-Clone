import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQ_uPVYa9Jq9QX5YseYk0Hkb72nWiR5Pc",
  authDomain: "tik-tok-clo.firebaseapp.com",
  databaseURL: "https://tik-tok-clo.firebaseio.com",
  projectId: "tik-tok-clo",
  storageBucket: "tik-tok-clo.appspot.com",
  messagingSenderId: "1015629263679",
  appId: "1:1015629263679:web:e73332903f08a2ea30598a",
  measurementId: "G-1THHHDDY43",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

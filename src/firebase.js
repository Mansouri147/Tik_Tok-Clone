import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB871pYR99PHjP4_iJrgyY74E-GYq1Gu6M",
  authDomain: "tik-tok-clon-e.firebaseapp.com",
  databaseURL: "https://tik-tok-clon-e.firebaseio.com",
  projectId: "tik-tok-clon-e",
  storageBucket: "tik-tok-clon-e.appspot.com",
  messagingSenderId: "235677857823",
  appId: "1:235677857823:web:b4b261840454699940fd2a",
  measurementId: "G-Q172PBZ7ZX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

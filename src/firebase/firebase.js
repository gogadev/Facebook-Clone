import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdpg90B1oN-FrummlEOStwdh6wTQtHL7k",
  authDomain: "facebook-clone-ae12b.firebaseapp.com",
  databaseURL: "https://facebook-clone-ae12b.firebaseio.com",
  projectId: "facebook-clone-ae12b",
  storageBucket: "facebook-clone-ae12b.appspot.com",
  messagingSenderId: "475597787135",
  appId: "1:475597787135:web:d7afdc39cd501a2b9121ca",
  measurementId: "G-HV767WS6H0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

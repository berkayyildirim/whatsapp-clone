import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCU9ZpsmyR8tTIlrnl-qclbWb_T5lqw23s",
    authDomain: "whatsapp-clone-5b6a5.firebaseapp.com",
    projectId: "whatsapp-clone-5b6a5",
    storageBucket: "whatsapp-clone-5b6a5.appspot.com",
    messagingSenderId: "893543170048",
    appId: "1:893543170048:web:e78c5b6c16889a3b9d98e5",
    measurementId: "G-W91ZE2V9S1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
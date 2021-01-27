import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDe-GlJXmZMtevuFT4nZbyf555ctXdPWEw",
  authDomain: "crwn-db-9366b.firebaseapp.com",
  projectId: "crwn-db-9366b",
  storageBucket: "crwn-db-9366b.appspot.com",
  messagingSenderId: "244403369394",
  appId: "1:244403369394:web:4e838e27d1f0c9ec6fe0ab",
  measurementId: "G-GTBPZLNETG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

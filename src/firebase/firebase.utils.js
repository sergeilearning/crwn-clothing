import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB_yNjzgFzzIGAC6QO-pc-B-1DAJ7Cmlj0",
  authDomain: "crwn-db-904dd.firebaseapp.com",
  databaseURL: "https://crwn-db-904dd.firebaseio.com",
  projectId: "crwn-db-904dd",
  storageBucket: "crwn-db-904dd.appspot.com",
  messagingSenderId: "532013497054",
  appId: "1:532013497054:web:34b70b32da1ad60628e04f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

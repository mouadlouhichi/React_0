import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDKr5Lvmnj61_MUXKQtw2VmAHKaadAgC8o",
  authDomain: "clothing-shop-v1.firebaseapp.com",
  databaseURL: "https://clothing-shop-v1.firebaseio.com",
  projectId: "clothing-shop-v1",
  storageBucket: "clothing-shop-v1.appspot.com",
  messagingSenderId: "615239075406",
  appId: "1:615239075406:web:e49c3817dace309a68a51f",
  measurementId: "G-BC4JM6G2Y6",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({displayName, email, createdAt, ...additionalData});
    } catch (error) {
      console.log("Error", error.message);
    }
  }
  return userRef;
};




export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ pompt: "Select Account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

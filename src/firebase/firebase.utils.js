import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCi39AS32VgNwpH8-2rshCP3AaoqH2J0dk",
  authDomain: "crwn-clothing-623e7.firebaseapp.com",
  projectId: "crwn-clothing-623e7",
  storageBucket: "crwn-clothing-623e7.appspot.com",
  messagingSenderId: "211954665793",
  appId: "1:211954665793:web:a37bcb92a4ba6ed69039c0",
  measurementId: "G-YFG6ZQCPK2"
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
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
  
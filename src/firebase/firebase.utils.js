import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC038-Jy1j_1SAzEpNHUQO0imI5HlpUHHE",
    authDomain: "crwn-dbsa.firebaseapp.com",
    databaseURL: "https://crwn-dbsa.firebaseio.com",
    projectId: "crwn-dbsa",
    storageBucket: "crwn-dbsa.appspot.com",
    messagingSenderId: "393156418562",
    appId: "1:393156418562:web:a46f603f78c63870fddb1b",
    measurementId: "G-EK5D7NM2VX"
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
  
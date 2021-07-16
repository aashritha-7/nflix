// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDfSEjpUXJergDiG4yr3Wk1W5gkfGF1r_o",
    authDomain: "netflix-clone-e0159.firebaseapp.com",
    projectId: "netflix-clone-e0159",
    storageBucket: "netflix-clone-e0159.appspot.com",
    messagingSenderId: "379088146326",
    appId: "1:379088146326:web:b003ae20837a1962e5d7b7",
    measurementId: "G-CV262HPLVK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;
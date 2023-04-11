// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4Zein7Cv_eo8sEXaFWTvv75SrzyIoAz0",
  authDomain: "mediumapp-28cdb.firebaseapp.com",
  projectId: "mediumapp-28cdb",
  storageBucket: "mediumapp-28cdb.appspot.com",
  messagingSenderId: "386769922039",
  appId: "1:386769922039:web:4407dc8b71e57127a330f2",
  measurementId: "G-Q458Y83V07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

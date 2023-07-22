
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWnfBOb1QRjoFcqVlUMKHeAvo5PC-bvTs",
  authDomain: "prim-u-1530616744723.firebaseapp.com",
  projectId: "prim-u-1530616744723",
  storageBucket: "prim-u-1530616744723.appspot.com",
  messagingSenderId: "616910808596",
  appId: "1:616910808596:web:b8a7bc888e20708ba7a901",
  measurementId: "G-2YZEX0L5EE"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app)


export { db, auth, storage };
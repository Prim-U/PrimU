// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZwOgCM1wJ30ilMmkoK8QQUduzjhU9eOw",
  authDomain: "primu-app.firebaseapp.com",
  projectId: "primu-app",
  storageBucket: "primu-app.appspot.com",
  messagingSenderId: "616510584432",
  appId: "1:616510584432:web:8607c0fe19dc58eb4c66b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app)

export { db, auth, storage };
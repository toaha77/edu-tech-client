// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
  // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQS1TGwT_BIXyuB8FcpEni-vM2gcccAh8",
  authDomain: "edu-tech-bf3f1.firebaseapp.com",
  projectId: "edu-tech-bf3f1",
  storageBucket: "edu-tech-bf3f1.appspot.com",
  messagingSenderId: "95472613975",
  appId: "1:95472613975:web:3beced90fbbf3f7ab70112",
  measurementId: "G-YGH2L3907D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export default app
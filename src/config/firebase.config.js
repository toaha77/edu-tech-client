 
import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: "AIzaSyD0hfCtCQHcBirU2fjvx8eHlR3yzIZ7u0w",
  authDomain: "edu-tech-99324.firebaseapp.com",
  projectId: "edu-tech-99324",
  storageBucket: "edu-tech-99324.appspot.com",
  messagingSenderId: "856905212421",
  appId: "1:856905212421:web:49c0240d07b31c87b5726c",
  measurementId: "G-55X3B5MYRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
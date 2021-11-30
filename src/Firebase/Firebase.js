// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwChStHNm-kfVbLawBl6Aoj1ZVPoqqPS0",
  authDomain: "fir-react-c1bcf.firebaseapp.com",
  projectId: "fir-react-c1bcf",
  storageBucket: "fir-react-c1bcf.appspot.com",
  messagingSenderId: "161598110291",
  appId: "1:161598110291:web:c3586bd658921db7b564a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
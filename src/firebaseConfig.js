
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZNiT52tXa_r5fPWxRuCdglpRadAfjOKs",
  authDomain: "student-management-syste-981f7.firebaseapp.com",
  projectId: "student-management-syste-981f7",
  storageBucket: "student-management-syste-981f7.appspot.com",
  messagingSenderId: "378290877345",
  appId: "1:378290877345:web:3a55a89558de6b9e4c51e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export const db = getFirestore(app);
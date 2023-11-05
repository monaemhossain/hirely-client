// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeMMyl_ie5lv_hRmN6owR3zcAq6G5w6M0",
  authDomain: "hire-ly.firebaseapp.com",
  projectId: "hire-ly",
  storageBucket: "hire-ly.appspot.com",
  messagingSenderId: "117386915966",
  appId: "1:117386915966:web:a7022f1623b558c0cca82f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)
export default auth;
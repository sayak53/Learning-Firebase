// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyKAhmUuiYiKV0G1BBN7Vm3j04CnRzZ8M",
  authDomain: "starting-firebase-2d5b0.firebaseapp.com",
  projectId: "starting-firebase-2d5b0",
  storageBucket: "starting-firebase-2d5b0.firebasestorage.app",
  messagingSenderId: "124050994813",
  appId: "1:124050994813:web:8d191dd16b25771bc5e314",
  measurementId: "G-SQ5396QMDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
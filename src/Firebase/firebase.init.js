// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB70CeZFTMt-2Zxg1vl4XcenZOJ0m5YdXw",
  authDomain: "tour-guide-client.firebaseapp.com",
  projectId: "tour-guide-client",
  storageBucket: "tour-guide-client.appspot.com",
  messagingSenderId: "1029939707123",
  appId: "1:1029939707123:web:d4cf9e01519d760a5dcb86",
  measurementId: "G-Y92QHQDDBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
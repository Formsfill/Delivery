// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmSLUHk9j82QFa_dOyJdAv-8O_MP9axn8",
  authDomain: "arafiz-9a4d4.firebaseapp.com",
  projectId: "arafiz-9a4d4",
  storageBucket: "arafiz-9a4d4.firebasestorage.app",
  messagingSenderId: "120289928910",
  appId: "1:120289928910:web:33494aaea1dd88ff9f529f",
  measurementId: "G-3C49F7EJ5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

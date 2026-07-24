import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
    getFirestore,
    doc,
    updateDoc,
    setDoc,
    collection,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmSLUHk9j82QFa_dOyJdAv-8O_MP9axn8",
  authDomain: "arafiz-9a4d4.firebaseapp.com",
  projectId: "arafiz-9a4d4",
  storageBucket: "arafiz-9a4d4.firebasestorage.app",
  messagingSenderId: "120289928910",
  appId: "1:120289928910:web:23eb192ca977e9e49f529f",
  measurementId: "G-ZR0S7EP1YE"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
    db,
    doc,
    updateDoc,
    setDoc,
    collection,
    onSnapshot
};

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
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.firebasestorage.app",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
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

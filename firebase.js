import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
  getFirestore,
  doc,
  updateDoc,
  onSnapshot,
  collection
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);





onSnapshot(collection(db, "seats"), (snapshot) => {

    snapshot.forEach((seatDoc) => {

        const seatId = seatDoc.id;
        const data = seatDoc.data();

        document.querySelectorAll(".seat").forEach((btn) => {

            if (btn.innerText === seatId) {

                if (data.booked) {
                    btn.classList.add("booked");
                    btn.disabled = true;
                } else {
                    btn.classList.remove("booked");
                    btn.disabled = false;
                }

            }

        });

    });

});




<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
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
    appId: "1:120289928910:web:23eb192ca977e9e49f529f",
    measurementId: "G-ZR0S7EP1YE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

import { db, doc, updateDoc } from "./firebase.js";
import {
  collection,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

let selectedSeat = null;

const seats = document.querySelectorAll(".seat");
const seatText = document.getElementById("selectedSeat");
const bookingBtn = document.getElementById("seatBookingBtn");

// Load booked seats from Firebase
onSnapshot(collection(db, "seats"), (snapshot) => {

    // Reset all seats
    seats.forEach(seat => {
        seat.classList.remove("booked");
        seat.disabled = false;
    });

    snapshot.forEach((seatDoc) => {

        const seatId = seatDoc.id;
        const data = seatDoc.data();

        seats.forEach((seat) => {

            if (seat.innerText.trim() === seatId) {

                if (data.booked) {
    seat.classList.add("booked");
    seat.disabled = true;

    if (data.name) {
        seat.title = "Booked by: " + data.name;
    }
} else {
    seat.classList.remove("booked");
    seat.disabled = false;
    seat.title = "";
}

                    if (seat.classList.contains("selected")) {
                        seat.classList.remove("selected");
                        selectedSeat = null;
                        seatText.innerHTML = "No Seat Selected";
                    }
                }

            }

        });

    });

});

// Select Seat
seats.forEach((seat) => {

    seat.addEventListener("click", () => {

        if (seat.classList.contains("booked")) return;

        seats.forEach(s => s.classList.remove("selected"));

        seat.classList.add("selected");

        selectedSeat = seat.innerText.trim();

        seatText.innerHTML = "Selected Seat: 🪑 " + selectedSeat;

    });

});

// Book Seat
bookingBtn.addEventListener("click", async () => {

    if (selectedSeat === null) {
        alert("Please select a seat.");
        return;
    }

    try {

        await updateDoc(doc(db, "seats", selectedSeat), {
    booked: true,
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value
});

        alert("Seat " + selectedSeat + " booked successfully!");

    } catch (error) {

        console.error(error);
        alert("Booking failed.");

    }

});

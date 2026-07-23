import { db } from "./firebase.js";

import {
    collection,
    onSnapshot,
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


let selectedSeat = null;

const seats = document.querySelectorAll(".seat");
const seatText = document.getElementById("selectedSeat");
const bookingBtn = document.getElementById("seatBookingBtn");


// LOAD SEATS

onSnapshot(collection(db,"seats"),(snapshot)=>{


    seats.forEach(seat=>{
        seat.classList.remove("booked");
        seat.disabled=false;
    });


    snapshot.forEach((seatDoc)=>{


        let id = seatDoc.id;
        let data = seatDoc.data();


        seats.forEach(seat=>{


            if(seat.dataset.seat == id){


                if(data.booked === true){

                    seat.classList.add("booked");
                    seat.disabled=true;

                    seat.title =
                    "Booked by: "+(data.name || "Unknown");

                }


            }


        });


    });


});



// SELECT SEAT

seats.forEach(seat=>{


    seat.addEventListener("click",()=>{


        if(seat.classList.contains("booked")){
            return;
        }


        seats.forEach(s=>{
            s.classList.remove("selected");
        });


        seat.classList.add("selected");


        selectedSeat = seat.dataset.seat;


        seatText.innerHTML =
        "Selected Seat: 🪑 "+selectedSeat;


    });


});




// BOOK SEAT

bookingBtn.addEventListener("click", async()=>{

    let nameBox = document.querySelector("#name");

    console.log("NAME BOX:", nameBox);

    if(!nameBox){
        alert("Name input missing");
        return;
    }

    console.log("NAME:", nameBox.value);

    if(nameBox.value.trim()==""){
        alert("Please type your name");
        return;
    }

    alert("Name found: "+nameBox.value);

});

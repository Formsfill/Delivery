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

bookingBtn.addEventListener("click",async()=>{


    if(selectedSeat === null){

        alert("Please select a seat");
        return;

    }



    let name =
    document.getElementById("name").value;


    let phone =
    document.getElementById("phone").value;



    if(name.trim()===""){

        alert("Enter your name");
        return;

    }



    try{


        await setDoc(
            doc(db,"seats",selectedSeat),
            {

                booked:true,
                name:name,
                phone:phone,
                seat:selectedSeat,
                time:new Date()

            }
        );



        alert(
        "✅ Seat "+selectedSeat+" booked by "+name
        );


        selectedSeat=null;



    }
    catch(error){


        console.error(error);

        alert(
        "❌ Booking failed: "+error.message
        );


    }


});

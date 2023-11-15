import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const MyBooking = () => {

    const [booking, setBooking] = useState([]);
    console.log(booking);

    useEffect(() => {
      // Fetch cart data from the server
      fetch("http://localhost:5000/bookings")
        .then((response) => response.json())
        .then((data) => {
          setBooking(data);
        })
        .catch((error) => {
          console.error("Error fetching bookings data:", error);
        });
    }, []);
  
  
    const handleDelete = (_id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/bookings/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                setBooking((prevBooking) =>
                  prevBooking.filter((cof) => cof._id !== _id)
                );
              }
            })
            .catch((error) => {
              console.error("Error deleting booking:", error);
            });
        }
      });
    };
  
  return (
    <div className="flex flex-col">
      <h1 className="text-center mt-28 text-3xl text-red-500 font-semibold">
        Bookings Item
      </h1>
      {booking.map((bookings) => (
        <div key={bookings.id} className="flex justify-between shadow-xl  mt-7">
          <figure className="w-1/2">
            <img src={bookings.photo} alt="Movie" />
          </figure>
          <div className="flex justify-between w-1/2 px-4 items-center ">
            <div className="">
              <h2 className="card-title"> Name: {bookings.name} </h2>
              <p> Service:{bookings.services} </p>
              <p>Description: {bookings.description}</p>
              <p> Price: {bookings.price} tk </p>
              <p>Rating: {bookings.rating} </p>
            </div>
            <div className="card-actions justify-end ">
              <div className="btn-group btn-group-vertical space-y-3">
                <button
                  onClick={() => handleDelete(bookings._id)}
                  className="btn btn-warning btn-outline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyBooking

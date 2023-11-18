import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const ManageServices = () => {
  const [allServices, setAllServices] = useState([]);
  console.log(allServices);

  useEffect(() => {
    // Fetch cart data from the server
    fetch("https://service-share-server.vercel.app/allServices")
      .then((response) => response.json())
      .then((data) => {
        setAllServices(data);
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
        fetch(`https://service-share-server.vercel.app/allServices/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setAllServices((prevBooking) =>
                prevBooking.filter((cof) => cof._id !== _id)
              );
            }
          })
          .catch((error) => {
            console.error("Error deleting allServices:", error);
          });
      }
    });
  };


  return (
    <div className="flex flex-col">
      <h1 className="text-center mt-28 text-3xl text-red-500 font-semibold">
        Bookings Item
      </h1>
      {allServices.map((services) => (
        <div key={services.id} className="flex justify-between shadow-xl  mt-7">
          <figure className="w-1/2">
            <img src={services.photo} alt="Movie" />
          </figure>
          <div className="flex justify-between w-1/2 px-4 items-center ">
            <div className="">
              <h2 className="card-title"> Name: {services.name} </h2>
              <p> Service:{services.services} </p>
              <p>Description: {services.description}</p>
              <p> Price: {services.price} tk </p>
              <p>Rating: {services.rating} </p>
            </div>
            <div className="card-actions justify-end ">
              <div className="btn-group btn-group-vertical space-y-3">
                <Link to={`/updateService/${services._id}`}>
                  <button
                 
                    className="btn btn-outline btn-info rounded-b-none"
                  >
                    Update
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(services._id)}
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
};

export default ManageServices;

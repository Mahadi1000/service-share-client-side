import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ShowSingleService = () => {
  const { type } = useParams();
  const { state: service } = useLocation();
  const [loading, setLoading] = useState(true);
  console.log(type, service);

  const handleBookButton = () => {
      if (loading) {
        console.log("Booking in progress...");
        return;
      }
      setLoading(true);
    // Make a POST request to your backend API to add the product to the cart
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((response) => response.json())
      .then((data) => {
        // After successfully adding to the cart, navigate to the cart route
        console.log(data);
        setLoading(false)
        toast.success("Added to Booking!");

        // alert("successfully added to the cart")
      })
      .catch((error) => {
        console.error("Error adding to Booking:", error);
      });
  };

  return (
    <div>
      <h1 className="text-center text-4xl mt-28">
        Service For <span className="font-bold uppercase">{type}</span>
      </h1>
      <div className="mt-28 max-w-6xl flex mx-auto justify-evenly items-center gap-6">
        <div>
          <img className="h-[400px]" src={service.photo} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold ml-10">
            Service Name: {service.type}
          </h1>
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-24 mask mask-hexagon">
                <img src={service.providerImage} />
              </div>
            </div>
            <div>
              <h2 className="text-4xl my-5 font-bold">Name: {service.name}</h2>
              <p className="text-xl py-4 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Quae, ullam. Magni, culpa, aspernatur est debitis harum dolores
                quisquam <br /> consequuntur ratione quam soluta nulla <br />
                numquam nobis voluptate impedit sint illo hic.
              </p>
              <p className="text-xl">Location: {service.serviceArea} </p>
            </div>
          </div>
          <p className="text-xl my-3 ml-10">Price= {service.price} TK</p>
          <div className="rating ml-10">
            {Array.from({ length: 5 }).map((_, index) => (
              <input
                key={index}
                type="radio"
                name={`rating-${service.id}`}
                className={`mask mask-star-2 bg-orange-400 ${
                  index < service.rating ? "checked" : ""
                }`}
              />
            ))}
          </div>
          <div>
            <button
              onClick={handleBookButton}
              className="btn btn-outline btn-success mt-4 ml-10"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ShowSingleService;

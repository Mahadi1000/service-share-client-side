import { useEffect } from "react";
import { useState } from "react";

const OurServices = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleViewDetails = () => {
      
    }

  return (
    <div className="mt-10 w-11/12 mx-auto">
      {services &&
        services.map((service) => (
          <div
            key={service.id}
            className="bg-transparent flex  p-8 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
          >
            <div className="h-1/2 w-1/2">
              <img className="w-full" src={service.serviceImage} alt="" />
            </div>
            <div className="mt-10 p-8 flex flex-col justify-end">
              <h1 className="text-xl  text-center font-semibold p-4">
                {service.serviceName}
              </h1>
              <div className="rating flex justify-center">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  checked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
              <p className="text-xl  text-end font-semibold p-4">
                {service.serviceDescription}
              </p>
              <button
                onClick={() => handleViewDetails()}
                className="btn btn-outline btn-success "
              >
                View Details
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default OurServices;

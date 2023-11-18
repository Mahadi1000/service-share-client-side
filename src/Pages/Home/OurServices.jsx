import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";

const OurServices = () => {
  const [services, setServices] = useState();
  const navigate = useNavigate();
  const {user} =useContext(AuthContext)
    // eslint-disable-next-line no-unused-vars
    const [combinedData, setCombinedData] = useState();

  useEffect(() => {
    fetch("https://service-share-server.vercel.app/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (services) {
      fetch(`https://service-share-server.vercel.app/allServices`)
        .then((res) => res.json())
        .then((data) => {
          const combined = services.map((service) => ({
            ...service,
            serverData: data.find((item) => item.type === service.type),
          }));
          setCombinedData(combined);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [services]);

// const handleViewDetails = (service, type) => {
//   if (user) {
//     navigate(`/showAllService/${type}?data=${JSON.stringify(service)}`);
//   } else {
//     navigate("/login");
//   }
// };

  

  return (
    <div className="mt-10 w-11/12 mx-auto">
      <h1 className="text-center text-4xl font-bold my-5">Our Services</h1>
      <div>
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
                {user ? (
                  <Link
                    to={`/showAllService/${service.type}?data=${JSON.stringify(
                      service
                    )}`}
                  >
                    <button className="btn w-full btn-outline btn-success">
                      View Details
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="btn  btn-outline btn-success"
                  >
                    Login to View Details
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OurServices;

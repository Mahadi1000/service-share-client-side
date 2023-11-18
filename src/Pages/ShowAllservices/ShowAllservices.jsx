import { useContext } from "react";
import { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";

function ShowAllService() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [typeData, setTypeData] = useState([]);
  console.log(type, typeData);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    // Fetch the data for the specified 'type'
    fetch(`https://service-share-server.vercel.app/allServices?type=${type}`)
      .then((response) => response.json())
      .then((data) => {
        setTypeData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [type]);

  const handleSingleService = (service) => {
        if (user) {
          navigate(`/singleService/${type}`, { state: service  });
        } else {
          navigate("/login");
        }
  }

  return (
    <div className="mt-28">
      <h1 className="text-center text-4xl font-bold">
        Available Service Details
      </h1>
      <div className="grid grid-cols-2 max-w-6xl mx-auto gap-10 mt-10">
        {typeData.map((service) => (
          <div
            key={service.id}
            className="bg-transparent  p-4 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
          >
            <div>
              <img className="h-96 w-full" src={service.photo} alt="" />
            </div>
            <div className="flex gap-4 items-center mt-3 ">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src={service.providerImage} />
                </div>
              </div>
              <div>
                <h1 className="text-xl  text-center font-semibold p-4">
                  {service.name}
                </h1>
              </div>
            </div>
            <p className="px-5 py-3">{service.description}</p>
            <div className="flex justify-center ">
              <button
                onClick={() => handleSingleService(service)}
                className="btn btn-outline btn-success"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowAllService;

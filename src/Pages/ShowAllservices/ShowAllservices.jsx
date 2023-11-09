import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ShowAllService() {
  const { type } = useParams();
  const [typeData, setTypeData] = useState([]);
  console.log(type, typeData);

  useEffect(() => {
    // Fetch the data for the specified 'type'
    fetch(`http://localhost:5000/allServices?type=${type}`)
      .then((response) => response.json())
      .then((data) => {
        setTypeData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [type]);

  return (
    <div className="mt-28">
      <h1>Show All Service Details</h1>
      {typeData.map((service) => (
        <div key={service.id}>
          <h2>Service Name: {service.name}</h2>
          {/* Render other service details here */}
        </div>
      ))}
    </div>
  );
}

export default ShowAllService;

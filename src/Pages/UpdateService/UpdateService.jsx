import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const UpdateService = () => {
  const updatedService = useLoaderData();
  const { id } = useParams();
  // const [updateService, setUpdateService] = useState()
  // useEffect(() => {
  //   // Fetch data based on the ID when the component mounts
  //   fetch(`https://service-share-server.vercel.app/allServices/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUpdateService(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching booking data:", error);
  //     });
  // }, [id]);

  console.log(updatedService, id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const services = form.services.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const providerImage = form.providerImage.value;
    const serviceArea = form.serviceArea.value;
    const photo = form.photo.value;
    const updateService = {
      name,
      services,
      type,
      price,
      description,
      photo,
      providerImage,
      serviceArea,
    };
    console.log(updatedService);
    fetch(
      `https://service-share-server.vercel.app/allServices/${updatedService._id} `,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateService),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Updated succenssfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-[#F4F3F0] mt-24">
      <div className="text-center text-black my-4">
        <h1 className="text-center text-4xl"> Update Servieces</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. <br /> The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using Content here.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-row flex-wrap justify-center "
      >
        <div className="mb-4 w-1/2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline "
            type="text"
            name="name"
            defaultValue={updatedService.name}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4  w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Service Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="services"
            defaultValue={updatedService.services}
            placeholder="Enter your chef"
          />
        </div>
        <div className="form-control mb-4  w-1/2 ">
          <label className="label"></label>
          <select
            defaultValue={updatedService.type}
            name="type"
            className="select select-bordered"
          >
            <option disabled selected>
              Type of service
            </option>
            <option>taxi</option>
            <option>rent</option>
            <option>Home Services</option>
            <option>Car book</option>
          </select>
        </div>
        <div className="mb-4  w-1/2 ">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="price"
            defaultValue={updatedService.price}
            placeholder="Enter your taste"
          />
        </div>
        <div className="mb-4  w-1/2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="city"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="description"
            defaultValue={updatedService.description}
            placeholder="Enter your category"
          />
        </div>
        <div className="mb-4  w-1/2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="city"
          >
            Service Area
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="serviceArea"
            defaultValue={updatedService.serviceArea}
            placeholder="Enter your Service Area
"
          />
        </div>
        <div className="mb-4  w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Photo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            name="photo"
            type="text"
            defaultValue={updatedService.photo}
            placeholder="Photo URL"
          />
        </div>
        <div className="mb-4  w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Service Provider image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            name="providerImage"
            type="text"
            placeholder="Provider image"
            defaultValue={updatedService.providerImage}
          />
        </div>

        <div className="mb-6 text-center w-full">
          <button
            className="bg-[#D2B48C]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            value="Add Coffee"
            type="submit"
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateService;

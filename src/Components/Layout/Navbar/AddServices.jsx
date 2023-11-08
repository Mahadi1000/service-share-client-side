import Swal from "sweetalert2";

import "sweetalert2/src/sweetalert2.scss";

const AddServices = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const photo = form.photo.value;
    const addServices = {
      name,
      brand,
      type,
      price,
      rating,
      photo,
    };
    console.log(addServices);
    fetch("http://localhost:5000/allServices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Typo: "Content-Type," not "Contect-Type"
      },
      body: JSON.stringify(addServices),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Service Added succenssfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          e.target.reset();
        } else {
          alert("Failed to add product");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while adding the service.");
      });
  };
  return (
    <div className="max-w-7xl mx-auto p-4 bg-[#F4F3F0] mt-24">
      <div className="text-center text-black my-4">
        <h1 className="text-center text-4xl"> Add Servieces</h1>
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
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4  w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Brand Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="brand"
            placeholder="Enter your chef"
          />
        </div>
        <div className="form-control mb-4  w-1/2 ">
          <label className="label"></label>
          <select name="type" className="select select-bordered">
            <option disabled selected>
              Type of product
            </option>
            <option>Phone</option>
            <option>Laptop</option>
            <option>Headphone</option>
            <option>Wearable</option>
            <option>Computer</option>
            <option>Camera</option>
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
            placeholder="Enter your taste"
          />
        </div>
        <div className="mb-4  w-1/2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="city"
          >
            Rating
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="rating"
            placeholder="Enter your category"
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
            placeholder="Photo URL"
          />
        </div>

        <div className="mb-6 text-center w-full">
          <button
            className="bg-[#D2B48C]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            value="Add Coffee"
            type="submit"
          >
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddServices;

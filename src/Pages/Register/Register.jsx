import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Firebase/AuthProvider";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const fullNameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@#$!%^&*]{6,}$/;

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);

    if (!name.match(fullNameRegex)) {
      // Full Name is invalid
      toast.error("Full Name is invalid");
      return;
    }
    if (!email.match(emailRegex)) {
      // Email is invalid
      toast.error("Invalid email format. Please enter a valid email address.");
      return;
    }
    if (!password.match(passwordRegex)) {
      // Password is invalid
      toast.error(
        "Password must be at least 6 characters and contain at least one uppercase letter, one lowercase letter, and one digit."
      );
      return;
    }
    //  create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Sign up successful!");
        e.target.reset();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center "
      style={{
        backgroundImage: "url('https://i.ibb.co/MNqZ2Hg/pxfuel-2.webp')",
      }}
    >
      <div className=" p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 backdrop-blur-sm">
        <h2 className="text-4xl text-white font-semibold text-center mb-4">
          Sign Up
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-200">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:ring focus:ring-blue-200"
              placeholder="Your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:ring focus:ring-blue-200"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:ring focus:ring-blue-200"
              placeholder="Password"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="flex items-center text-white">
              <input type="checkbox" className="mr-2" />I agree to the terms and
              conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
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
        <p className="mt-4 text-center text-gray-200">
          Already have an account?
          <Link to="/login" className="text-blue-500 hover:underline font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

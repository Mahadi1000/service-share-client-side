// eslint-disable-next-line no-unused-vars
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Firebase/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@#$!%^&*]{6,}$/;

    const handleLogin = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = form.get("email");
      const password = form.get("password");
      console.log(email, password);
      signIn(email, password).then((result) => {
        console.log(result.user);
        e.target.reset();
        toast.success("Successfully Logged IN!");
        setTimeout(() => {
          navigate("/");
        }, 2000).catch((error) => {
          console.log(error);
        });
      });

      if (!email.match(emailRegex)) {
        toast.error(
          "Invalid email format. Please enter a valid email address."
        );
      }

      if (!password.match(passwordRegex)) {
        toast.error(
          "Password must be at least 6 characters and contain at least one uppercase letter, one lowercase letter, and one digit."
        );
      }
    };
 const handleGoogleSignIn = () => {
   signInWithGoogle().then((result) => {
     toast.success("Successfully Logged In!");
     console.log(result.user);
     setTimeout(() => {
       navigate("/");
     }, 2000);
   });
 };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-center bg-no-repeat bg-cover text-white"
      style={{
        backgroundImage: "url('https://i.ibb.co/0rbpwGT/pxfuel.jpg')",
      }}
    >
      <form onSubmit={handleLogin}>
        <div className="bg-transparent backdrop-blur-sm p-8 rounded-lg shadow-2xl transform transition-transform hover:scale-105">
          <h2 className="text-3xl font-bold text-center mb-4 ">Login</h2>

          <div className="mb-4">
            <label className="block text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 border rounded-md text-black focus:ring focus:ring-blue-200"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-3 py-2 text-black border rounded-md border-gray-300 focus:ring focus:ring-blue-200"
              placeholder="Password"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 font-bold hover:underline">
              Forgot Password?
            </a>
          </div>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Login
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="w-full mt-2 btn btn-outline btn-info"
          >
            Sign In with Google.
          </button>

          <p className="mt-4 text-center text-gray-200">
            Dont have an account?
            <Link
              to="/register"
              className="text-blue-600 font-bold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
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
    </div>
  );
}

export default Login

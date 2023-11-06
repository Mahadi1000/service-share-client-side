import { Footer } from "flowbite-react";
import Navbar from "../../Components/Layout/Navbar/NavBar";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default Home;

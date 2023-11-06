import Navbar from "../../Components/Layout/Navbar/NavBar";
import About from "./About";
import Banner from "./Banner";
import Blogs from "./Blogs";
import Footer from "./Footer";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Testimonial></Testimonial>
      <Blogs></Blogs>
      <Footer></Footer>
      </div>
  );
};

export default Home;

import FacebookMsg from "../../Components/FacebookMsg";
import Navbar from "../../Components/Layout/Navbar/NavBar";
import About from "./About";
import Banner from "./Banner";
import Blogs from "./Blogs";
import Footer from "./Footer";
import OurServices from "./OurServices";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <OurServices></OurServices>
      <Testimonial></Testimonial>
      <Blogs></Blogs>
      <Footer></Footer>
<FacebookMsg></FacebookMsg>
      </div>
  );
};

export default Home;

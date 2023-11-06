import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/NavBar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;

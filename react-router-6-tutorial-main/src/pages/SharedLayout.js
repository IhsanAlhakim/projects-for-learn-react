import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar";

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      {/* <Navbar /> */}
      <Outlet />
    </>
  );
};
export default SharedLayout;

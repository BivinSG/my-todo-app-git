import { useState } from "react";
import Sidebar from "../SideBar";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  // const [menu, setMenu] = useState("home");
  return (
    <>
      <Sidebar  />
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;

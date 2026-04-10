import "./App.css";
import Home from "./Pages/Home";
import ManageStudents from "./Pages/ManageStudents";
import ManageCourses from "./Pages/ManageCourses";
import Sidebar from "./components/SideBar";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [menu, setMenu] = useState("home");
  return (
    <>
      <Sidebar menu={menu} setMenu={setMenu} />
      <Header />
      {menu === "home" ? (
        <Home />
      ) : menu === "students" ? (
        <ManageStudents />
      ) : menu === "courses" ? (
        <ManageCourses />
      ) : (
        <div>No Page Found</div>
      )}
    </>
  );
}

export default App;

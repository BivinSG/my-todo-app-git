import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const menu = location.pathname.split("/").pop() || "home";
  console.log(menu);
  return (
    <aside className="sidebar">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ position: "sticky", top: "0px", minHeight: "100vh" }}
      >
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Sidebar</span>
        </Link>

        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link text-white ${menu === "home" ? "active" : ""}`}
              aria-current="page"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/students"
              className={`nav-link text-white ${menu === "students" ? "active" : ""}`}
            >
              Students
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className={`nav-link text-white ${menu === "courses" ? "active" : ""}`}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/courses/add-course"
              className={`nav-link text-white ${menu === "add-course" ? "active" : ""}`}
            >
              Add Course
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

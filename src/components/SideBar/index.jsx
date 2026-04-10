import React from "react";

const Sidebar = ({ menu, setMenu }) => {
  return (
    <aside className="sidebar">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ position: "sticky", top: "0px", minHeight: "100vh" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Sidebar</span>
        </a>

        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <div
              className={`nav-link text-white ${menu === "home" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setMenu("home");
              }}
              aria-current="page"
            >
              Home
            </div>
          </li>

          <li>
            <div
              className={`nav-link text-white ${menu === "students" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setMenu("students");
              }}
            >
              Students
            </div>
          </li>

          <li>
            <div
              className={`nav-link text-white ${menu === "courses" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setMenu("courses");
              }}
            >
              Courses
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

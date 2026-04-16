import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ position: "sticky", top: "0px", minHeight: "100vh" }}
      >
        <NavLink
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Sidebar</span>
        </NavLink>

        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link text-white ${isActive ? "active" : ""}`
              }
              aria-current="page"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/students"
              //end
              className={({ isActive }) =>
                `nav-link text-white ${isActive ? "active" : ""}`
              }
            >
              Students
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `nav-link text-white ${isActive ? "active" : ""}`
              }
            >
              Courses
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

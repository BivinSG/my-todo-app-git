import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useAppContext from "../hooks/useAppContext";
import Input from "../Input";
import Modal from "../components/Modal";
import RadioButton from "../components/RadioButton";
import CheckBox from "../components/CheckBox";
import Dropdown from "../components/Dropdown";
import Table from "../components/Table";
import {
  Outlet,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ManageStudents = function ListInput() {
  const navigate = useNavigate();
  // const {
  //   studentState,
  //   courseState,
  //   dispatchStudent: dispatch,
  // } = useAppContext();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const studentState = useSelector((state) => state.studentState);
  const courseState = useSelector((state) => state.courseState);

  const { students } = studentState;
  const { courses } = courseState;
  const [inputValue, setInputValue] = useState("");
  const [nameError, setNameError] = useState("");
  const [contactError, setContactError] = useState("");
  const [contactInput, setContactInput] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(students);
  const [tableData, setTableData] = useState([]);
  // const { findStudent } = state;

  const [searchParams, setSearchParams] = useSearchParams();

  const handleAddClick = () => {
    navigate(`/students/add-student?action=add`);
  };

  const handleEdit = (studentId) => {
    dispatch({ type: "find-student", payload: studentId });
    navigate(`/students/edit-student?id=${studentId}&action=edit`);
  };

  const handleDelete = (studentId) => {
    dispatch({ type: "delete", payload: studentId });
  };

  const tableColumns = [
    { header: "Sl.No", accessor: "slNo" },
    { header: "Name", accessor: "name" },
    { header: "Contact", accessor: "contact" },
    { header: "Education", accessor: "education" },
    { header: "Skills", accessor: "skills" },
    { header: "Course", accessor: "course" },
    {
      header: "Actions",
      render: (student) => {
        return (
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => {
                handleEdit(student?.id);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => {
                handleDelete(student?.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    if (Array.isArray(students)) {
      const modifiedDataArray = students?.map((student, index) => ({
        slNo: index + 1,
        ...student,
        skills: Array.isArray(student.skills) ? student.skills.join(", ") : "",
        course: courses.find((c) => c.id === student.course)?.courseTitle,
      }));

      setTableData(modifiedDataArray);
    }
  }, [students]);

  console.log(students);

  return (
    <main className="main">
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          setModalOpen={toggleModal}
          handleClose={handleClose}
          modalTitle={formValues?.id ? "Edit Student" : "Add Student"}
          handleSave={handleSave}
        />
      )}
      <div>
        <Table
          tableColumns={tableColumns}
          data={tableData}
          onAddClick={handleAddClick}
        />
      </div>
      <Outlet />
    </main>
  );
};

export default ManageStudents;

import React from "react";
import Table from "../components/Table";
import Modal from "../components/Modal";
import Input from "../Input";
import { useState, useEffect } from "react";
import RadioButton from "../components/RadioButton";
import useAppContext from "../hooks/useAppContext";

const ManageCourses = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { courseState, dispatchCourse: dispatch } = useAppContext();
  const { courses } = courseState;
  const [courseDetails, setCourseDetails] = useState({
    courseTitle: "",
    paidCourse: "",
  });
  const [courseArray, setCourseArray] = useState([]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (courseId) => {
    setModalOpen(true);
    setCourseDetails(courses?.find((course) => course?.id === courseId));
  };

  const handleDelete = (courseId) => {
    dispatch({ type: "delete-course", payload: courseId });
  };

  const resetStates = () => {
    setCourseDetails({ courseTitle: "", paidCourse: "" });
    setModalOpen(false);
  };

  const handleSubmit = () => {
    if (courseDetails?.courseTitle && courseDetails?.paidCourse) {
      if (courseDetails?.id) {
        const updatedCourse = { ...courseDetails };
        dispatch({ type: "edit-course", payload: updatedCourse });
      } else {
        const newCourse = {
          id: crypto.randomUUID(),
          ...courseDetails,
        };
        dispatch({ type: "add-course", payload: newCourse });
      }
      resetStates();
    }
  };

  useEffect(() => {
    if (Array.isArray(courses)) {
      const modifiedDataArray = courses?.map((course, index) => ({
        slNo: index + 1,
        ...course,
        paidCourse: course?.paidCourse === "no" ? "Free" : "Paid",
        skills: Array.isArray(course.skills) ? course.skills.join(", ") : "",
      }));

      setCourseArray(modifiedDataArray);
    }
  }, [courses]);

  const tableColumns = [
    { header: "Sl.No", accessor: "slNo" },
    { header: "Course Title", accessor: "courseTitle" },
    { header: "Paid Course", accessor: "paidCourse" },
    {
      header: "Actions",
      render: (course) => {
        return (
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => {
                handleEdit(course?.id);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => {
                handleDelete(course?.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <main className="main">
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          modalTitle={"Add Title"}
          modalBody={
            <div className="p-4">
              <div style={{ maxWidth: "75%" }}>
                <Input
                  name={"courseTitle"}
                  value={courseDetails?.courseTitle}
                  label={"Course-Title"}
                  onChange={handleInputChange}
                  placeholder={"Course Title..."}
                  error={""}
                />
              </div>
              <div style={{ maxWidth: "75%" }}>
                <RadioButton
                  label={"Paid Course"}
                  name="paidCourse"
                  selectedValue={courseDetails?.paidCourse || ""}
                  options={[
                    { label: "Yes", value: "yes" },
                    { label: "No", value: "no" },
                  ]}
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>
          }
          handleSave={handleSubmit}
          handleClose={() => setModalOpen(false)}
        />
      )}

      <Table
        tableColumns={tableColumns}
        data={courseArray}
        onAddClick={() => setModalOpen(true)}
      />
    </main>
  );
};

export default ManageCourses;

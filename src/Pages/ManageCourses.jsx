import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import RadioButton from "../components/RadioButton";
import Table from "../components/Table";
import Input from "../Input";
import {
  deleteCourseData,
  getCourseData,
  postCourseData,
  updatedCourseData,
} from "../redux/actions/coursesActions";
import Loading from "../components/Loading";

const ManageCourses = () => {
  const [courseDetails, setCourseDetails] = useState({
    courseTitle: "",
    paidCourse: "",
  });
  const [courseArray, setCourseArray] = useState([]);
  const [postDataLoading, setPostDataLoading] = useState(false);
  const dispatch = useDispatch();
  const courseState = useSelector((state) => state.courseState);
  const { courses, loading, modalOpen, error } = courseState;

  useEffect(() => {
    if (!modalOpen) {
      setCourseDetails({ courseTitle: "", paidCourse: "" });
    }
  }, [modalOpen]);

  useEffect(() => {
    dispatch(getCourseData());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (courseId) => {
    dispatch({ type: "OPEN_MODAL" });
    setCourseDetails(courses?.find((course) => course?.id === courseId));
  };

  const handleDelete = (courseId) => {
    dispatch(deleteCourseData(courseId));
  };

  const handleSubmit = () => {
    if (courseDetails?.courseTitle && courseDetails?.paidCourse) {
      if (courseDetails?.id) {
        dispatch(updatedCourseData(courseDetails));
      } else {
        dispatch(postCourseData(courseDetails));
      }
      resetStates();
    }
  };
  // console.log(loading);

  const handleClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
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
      <>
        {modalOpen && (
          <Modal
            loading={loading}
            modalOpen={modalOpen}
            // setModalOpen={setModalOpen}
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
            SaveButtonText={
              loading ? (
                <>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>Saving...
                </>
              ) : (
                "Save"
              )
            }
            CloseButtonText={loading ? "Cancel" : "Close"}
            handleSave={handleSubmit}
            handleClose={handleClose}
          />
        )}
      </>
      {loading && <Loading />}
      <Table
        tableColumns={tableColumns}
        data={courseArray}
        onAddClick={() => dispatch({ type: "OPEN_MODAL" })}
      />
    </main>
  );
};

export default ManageCourses;

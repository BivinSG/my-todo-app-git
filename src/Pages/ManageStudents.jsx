import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useAppContext from "../hooks/useAppContext";
import Input from "../Input";
import Modal from "../components/Modal";
import RadioButton from "../components/RadioButton";
import CheckBox from "../components/CheckBox";
import Dropdown from "../components/Dropdown";
import Table from "../components/Table";

const ManageStudents = function ListInput() {
  const { state, dispatch } = useAppContext();
  const { students } = state;
  const [inputValue, setInputValue] = useState("");
  const [nameError, setNameError] = useState("");
  const [contactError, setContactError] = useState("");
  const [contactInput, setContactInput] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    contact: "",
    education: "",
    skills: [],
    course: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(students);
  const [tableData, setTableData] = useState([]);

  const nameRef = useRef();
  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    console.log(name, value, type, checked);
    console.log(type);
    if (type === "checkbox") {
      if (checked) {
        setFormValues((prev) => ({
          ...prev,
          [name]: [...prev[name], value],
        }));
      } else {
        setFormValues((prev) => ({
          ...prev,
          [name]: prev[name].filter((val) => val !== value),
        }));
      }
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
      setFormErrors((prev) => ({
        ...prev,
        [name]: value ? "" : `${name} is required`,
      }));
    }
  }, []);

  console.log(formValues);

  function validateFormValues() {
    const errors = {};
    console.log(Object.keys(formValues));

    Object.keys(formValues).forEach((key) => {
      if (!formValues[key]) {
        errors[key] = `${key} is required`;
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSearch = useCallback((event) => {
    dispatch({ type: "search", payload: event.target.value });
  }, []);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const resetStates = () => {
    setFormErrors({});
    setFormValues({ name: "", contact: "" });
    toggleModal();
  };

  const handleSave = useCallback(() => {
    if (validateFormValues()) {
      const newStudents = dispatch({
        type: "add",
        payload: { ...formValues, id: crypto.randomUUID() },
      });
      setData([...data, newStudents]);
      resetStates();
      nameRef.current.focus();
    }
  });

  const handleClose = () => {
    console.log("hello");
    setModalOpen(!modalOpen);
  };

  const tableColumns = [
    { header: "Sl.No", accessor: "slNo" },
    { header: "Name", accessor: "name" },
    { header: "Contact", accessor: "contact" },
    { header: "Education", accessor: "education" },
    { header: "Skills", accessor: "skills" },
    { header: "Course", accessor: "course" },
  ];

  useEffect(() => {
    if (Array.isArray(students)) {
      const modifiedDataArray = students?.map(
        (student, index) => ({
          slNo: index + 1,
          ...student,
          skills: Array.isArray(student.skills)
            ? student.skills.join(", ")
            : "",
        }),
        [students],
      );

      setTableData(modifiedDataArray);
    }
  }, [students]);

  return (
    <>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          setModalOpen={toggleModal}
          handleClose={handleClose}
          modalTitle={"Manage Student"}
          modalBody={
            <div className="list-input">
              <Input
                type="text"
                name="name"
                value={formValues?.name || ""}
                ref={nameRef}
                onChange={handleInputChange}
                placeholder="Enter the name..."
                error={formErrors?.name}
                className="input-box"
              />
              <Input
                type="tel"
                name="contact"
                value={formValues?.contact || ""}
                onChange={handleInputChange}
                placeholder="Contacts..."
                error={formErrors?.contact}
              />
              <div>
                <RadioButton
                  label={"Education"}
                  name="education"
                  options={[
                    { label: "non-tech", value: "non-tech" },
                    { label: "tech", value: "tech" },
                  ]}
                  handleInputChange={handleInputChange}
                />
              </div>
              <div>
                <CheckBox
                  name={"skills"}
                  label={"skills familiar with"}
                  handleInputChange={handleInputChange}
                  options={[
                    { label: "HTML", value: "HTML" },
                    { label: "CSS", value: "CSS" },
                    { label: "JAVASCRIPT", value: "JAVASCRIPT" },
                  ]}
                />
              </div>
              <div>
                <Dropdown
                  label={"Course"}
                  name={"course"}
                  handleInputChange={handleInputChange}
                  options={[
                    { label: "Mern", value: "Mern" },
                    { label: "React", value: "React" },
                    { label: "Python", value: "Python" },
                  ]}
                />
              </div>
            </div>
          }
          handleSave={handleSave}
        />
      )}
      <div>
        <Table
          tableColumns={tableColumns}
          data={tableData}
          toggleModal={toggleModal}
        />
      </div>
    </>
  );
};

export default ManageStudents;

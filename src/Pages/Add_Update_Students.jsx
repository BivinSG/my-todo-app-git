import React, { useCallback, useEffect, useRef, useState } from "react";
import Input from "../Input";
import RadioButton from "../components/RadioButton";
import CheckBox from "../components/CheckBox";
import Dropdown from "../components/Dropdown";
import useAppContext from "../hooks/useAppContext";
import { useLocation, useNavigate } from "react-router-dom";

const Add_Update_Students = () => {
  const { state } = useLocation();
  const { student } = state || {};
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    contact: "",
    education: "",
    skills: [],
    course: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const nameRef = useRef();
  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

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

  const resetStates = () => {
    setFormErrors({});
    setFormValues({ name: "", contact: "" });
  };

  const goBack = () => {
    navigate("/students");
  };

  useEffect(() => {
    if (student) {
      setFormValues({ ...student });
    }
  }, [student]);

  const handleSave = useCallback(() => {
    if (validateFormValues()) {
      if (formValues?.id) {
        dispatch({ type: "edit", payload: formValues });
      } else {
        const newStudent = { ...formValues, id: crypto.randomUUID() };
        dispatch({ type: "add", payload: newStudent });
      }
      resetStates();
      goBack();
    }
  });

  const handleCancel = () => {
    goBack();
  };

  return (
    <main className="main">
      <div style={{ padding: "50px" }}>
        <div
          style={{
            maxWidth: "75%",
            padding: "20px",
            border: "1px solid rgba(0,0,0,0.2)",
          }}
        >
          <Input
            type="text"
            name="name"
            label="Full Name"
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
            label="Contact"
            value={formValues?.contact || ""}
            onChange={handleInputChange}
            placeholder="Contacts..."
            error={formErrors?.contact}
          />
          <div>
            <RadioButton
              label={"Education"}
              name="education"
              selectedValue={formValues?.education || ""}
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
              selectedValues={formValues?.skills || []}
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
              selectedValue={formValues?.course || ""}
              options={[
                { label: "Mern", value: "Mern" },
                { label: "React", value: "React" },
                { label: "Python", value: "Python" },
              ]}
            />
          </div>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>

          <button className="btn btn-danger" onClick={handleCancel}>
            Close
          </button>
        </div>
      </div>
    </main>
  );
};

export default Add_Update_Students;

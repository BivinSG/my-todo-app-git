import { useCallback, useEffect, useRef, useState } from "react";
import useAppContext from "../components/hooks/useAppContext";
import Input from "../components/Input";
import Modal from "../components/Modal";
import RadioButton from "../components/RadioButton";
import CheckBox from "../components/CheckBox";

function ListInput() {
  const { state, dispatch } = useAppContext();
  const [inputValue, setInputValue] = useState("");
  const [nameError, setNameError] = useState("");
  const [contactError, setContactError] = useState("");
  const [contactInput, setContactInput] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    contact: "",
    education: "",
    skills: [],
  });
  const [formErrors, setFormErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const nameRef = useRef();
  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const contactRef = useRef();

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
    }
  },[]);

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
      dispatch({
        type: "add",
        payload: { ...formValues, id: crypto.randomUUID() },
      });
      resetStates();
      nameRef.current.focus();
    }
  });

  const handleClose = () => {
    console.log("hello");
    setModalOpen(!modalOpen);
  };

  return (
    <>
      {modalOpen ? (
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
            </div>
          }
          handleSave={handleSave}
        />
      ) : (
        <div className="list-input-section">
          <div className="list-input-container">
            <button onClick={toggleModal}>Add</button>
            <div className="list-search">
              <Input
                type="text"
                name="search"
                value={state?.search}
                onChange={handleSearch}
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListInput;

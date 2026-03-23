import React, {
  useContext,
  useRef,
  useEffect,
  useState,
  useCallback,
  forwardRef,
} from "react";
import Input from "../components/Input";
import { dummyContext } from "../App";
import AppContext from "../components/context/AppContext";
import useAppContext from "../components/hooks/useAppContext";

function ListInput() {
  // console.log("List Input is running");
  const { state, dispatch } = useAppContext();

  // const { dummyValue } = useContext(dummyContext);
  // console.log(dummyValue);
  const [inputValue, setInputValue] = useState("");
  const [nameError, setNameError] = useState("");
  const [contactError, setContactError] = useState("");
  const [contactInput, setContactInput] = useState("");
  const [formValues, setFormValues] = useState({ name: "", contact: "" });
  const [formErrors, setFormErrors] = useState({});

  const nameRef = useRef();
  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const contactRef = useRef();

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({
      ...prev,
      [name]: value ? "" : `${name} is required`,
    }));
    // if (name === "name") {
    //   setInputValue(value);
    // } else if (name === "contact") {
    //   setContactInput(value);
    // }
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

  const handleAddClick = useCallback(() => {
    // console.log(Object.keys(formValues));
    if (validateFormValues()) {
      dispatch({
        type: "add",
        payload: { ...formValues, id: crypto.randomUUID() },
      });
      setFormValues({});
      setFormErrors({});
      nameRef.current.focus();
    }
  });

  return (
    <div className="list-input-section">
      <div className="list-input-container">
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
        </div>

        <button onClick={handleAddClick}>Add</button>

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
  );
}

export default ListInput;

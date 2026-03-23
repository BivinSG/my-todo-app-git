import {
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import useAppContext from "../components/hooks/useAppContext";
import Input from "../components/Input";

function ListInput() {
  // console.log("List Input is running");
  const { state, dispatch } = useAppContext();

  // const { dummyValue } = useContext(dummyContext);
  // console.log(dummyValue);
  const [inputValue, setInputValue] = useState("");
  const [nameError, setNameError] = useState("");
  const [contactError, setContactError] = useState("");

  const nameRef = useRef();
  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const contactRef = useRef();

  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
    if (nameError) setNameError("");
  }, []);

  const handleSearch = useCallback((event) => {
    dispatch({ type: "search", payload: event.target.value });
  }, []);

  const handleAddClick = useCallback(() => {
    const contact = contactRef.current?.value ?? "";

    if (!inputValue) {
      setNameError("Name is required");
    }
    if (!contact) {
      setContactError("Contact is required");
    }

    if (!inputValue || !contact) return;

    if (contact && inputValue) {
      dispatch({
        type: "add",
        payload: {
          name: inputValue,
          id: crypto.randomUUID(),
          contact,
        },
      });
      setInputValue("");
      contactRef.current.value = "";
      setContactError("");
      setNameError("");
      nameRef.current.focus();
    }

    // setStudents((prev) => [...prev, newStudent]);

    if (contactRef.current) contactRef.current.value = "";
  });

  return (
    <div className="list-input-section">
      <div className="list-input-container">
        <div className="list-input">
          <Input
            type="text"
            name="name"
            value={inputValue}
            ref={nameRef}
            onChange={handleInputChange}
            placeholder="Enter the name..."
            error={nameError}
            className="input-box"
          />
          <Input
            type="tel"
            name="contact"
            ref={contactRef}
            placeholder="Contacts..."
            error={contactError}
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

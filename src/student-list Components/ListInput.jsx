import React, { useEffect, useRef, useState } from "react";
import Input from "../components/Input";

const ListInput = React.forwardRef(function ListInput(
  { students, handleAddButton, searchValue, setSearchValue },
  ref,
) {
  const [inputValue, setInputValue] = useState("");
  const [nameError, setNameError] = useState("");
  const [contactError, setContactError] = useState("");

  const contactRef = useRef();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };
  console.log(searchValue);

  const handleAddClick = () => {
    const contact = contactRef.current.value;
    if (inputValue === "") {
      setNameError("Name is required");
    }
    if (contact === "") {
      setContactError("Contact is required");
    }
    if (inputValue && contact) {
      const newStudent = {
        name: inputValue,
        id: crypto.randomUUID(),
        contact,
      };

      handleAddButton(newStudent);

      setInputValue("");
      contactRef.current.value = "";
    }
  };

  return (
    <div className="list-input-section">
      <div className="list-input-container">
        <div className="list-input">
          <Input
            type="text"
            name={"name"}
            value={inputValue}
            ref={ref}
            onChange={handleInputChange}
            placeholder="Enter the name..."
            error={nameError}
            className={"input-box"}
          />
          <Input
            type="tel"
            name={"contact"}
            ref={contactRef}
            placeholder="Contacts..."
            error={contactError}
          />
        </div>

        <button onClick={handleAddClick}>Add</button>

        <div className="list-search">
          <Input
            type="text"
            name={"search"}
            value={searchValue}
            onChange={handleSearch}
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
});

export default ListInput;

import { useRef, useState } from "react";

function ListInput({ students, setStudents }) {
  const [input, setInput] = useState("");
  console.log(input);

  const contactRef = useRef();
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddButton = () => {
    const contactNumber = contactRef.current.value;
    setStudents([
      ...students,
      {
        id: crypto.randomUUID(),
        name: input,
        contactNumber: contactNumber,
      },
    ]);
    setInput("");
    console.log(students);
    console.log(contactNumber);
  };
  return (
    <>
      <input type="text" defaultValue={"sdnfjsn"} onChange={handleInputChange} /><br />
      <input type="text" ref={contactRef} /><br />
      <button onClick={handleAddButton}>Add</button>
    </>
  );
}

export default ListInput;
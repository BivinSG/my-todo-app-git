import { useEffect, useRef, useState } from "react";
import "./App.css";
import ListData from "./student-list Components/ListData";
import ListInput from "./student-list Components/ListInput";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Bivin", contact: 9400030603 },
    { id: 2, name: "Sheethal", contact: 9400075849 },
  ]);
  const [searchValue, setSearchValue] = useState("");

  const nameRef = useRef();

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const handleAddButton = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const handleDeleteButton = (studentId) => {
    const filteredArray = students.filter(
      (student) => student.id !== studentId,
    );
    setStudents(filteredArray);
  };

  return (
    <>
      <ListInput
        students={students}
        ref={nameRef}
        handleAddButton={handleAddButton}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <ListData
        students={students.filter((student) =>
          student.name.toLowerCase().includes(searchValue.toLowerCase()),
        )}
        handleDeleteButton={handleDeleteButton}
      />
    </>
  );
}

export default App;

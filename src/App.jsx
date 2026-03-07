import { useState } from "react";
import "./App.css";
import ListData from "./student-list Components/ListData";
import ListInput from "./student-list Components/ListInput";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Bivin" },
    { id: 2, name: "Sheethal" },
    { id: 3, name: "Ashish" },
    { id: 4, name: "Mathew" },
    { id: 5, name: "Joseph" },
  ]);

  return (
    <>
      <ListInput students={students} setStudents={setStudents} />
      <ListData students={students} setStudents={setStudents} />
    </>
  );
}

export default App;

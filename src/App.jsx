import React, { useState } from "react";
import "./App.css";

function ListItem({ id, name, onDelete }) {
  return (
    <div>
      {name}
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
function ListInput({ students, setStudents }) {
  const [input, setInput] = useState("");
  console.log(input);
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddButton = () => {
    setStudents([
      ...students,
      {
        id: crypto.randomUUID(),
        name: input,
      },
    ]);
    setInput("");
    console.log(students);
  };
  return (
    <>
      <input value={input} onChange={handleInputChange} />
      <button onClick={handleAddButton}>Add</button>
    </>
  );
}
function ListData({ students, setStudents }) {
  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((name) => name.id !== id));
  };
  return students?.map((student) => (
    <ListItem
      key={student.id}
      id={student.id}
      onDelete={handleDelete}
      name={student.name}
    />
  ));
}

function App() {
  const [students, setStudents] = React.useState([
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

import { useContext } from "react";
import AppContext from "../components/context/AppContext";

function ListItem({ student }) {
  console.log("List Item is running");

  const { dispatch } = useContext(AppContext);

  const handleDelete = (studentId) => {
    dispatch({ type: "delete", payload: studentId });
  };

  return (
    <div className="list-item">
      <div className="student-info">
        <p className="student-name">{student?.name}</p>
        <p className="student-contact">{student?.contact}</p>
      </div>

      <button className="delete-btn" onClick={() => handleDelete(student?.id)}>
        Delete
      </button>
    </div>
  );
}

export default ListItem;

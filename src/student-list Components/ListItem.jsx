import useAppContext from "../components/hooks/useAppContext";

function ListItem({ student }) {
  // console.log("List Item is running");

  const { dispatch } = useAppContext();

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

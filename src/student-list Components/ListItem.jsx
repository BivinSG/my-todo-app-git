function ListItem({ student, handleDeleteButton }) {
  return (
    <div className="list-item">
      <div className="student-info">
        <p className="student-name">{student?.name}</p>
        <p className="student-contact">{student?.contact}</p>
      </div>

      <button
        className="delete-btn"
        onClick={() => handleDeleteButton(student?.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ListItem;

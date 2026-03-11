import ListItem from "./ListItem";

function ListData({ students, handleDeleteButton }) {
  return students.length > 0 ? (
    students?.map((student) => (
      <ListItem
        key={student.id}
        student={student}
        handleDeleteButton={handleDeleteButton}
      />
    ))
  ) : (
    <p>No Contacts found</p>
  );
 
}

export default ListData;

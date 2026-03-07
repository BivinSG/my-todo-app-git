import ListItem from "./ListItem";

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

export default ListData;
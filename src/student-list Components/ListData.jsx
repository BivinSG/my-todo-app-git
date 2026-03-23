import useAppContext from "../components/hooks/useAppContext";
import ListItem from "./ListItem";

function ListData() {
  // console.log("List Data is running");
  const { state } = useAppContext();

  return state?.students?.length > 0 ? (
    state?.students
      ?.filter((student) =>
        student.name.toLowerCase().includes(state?.search.toLowerCase()),
      )
      .map((student) => <ListItem key={student.id} student={student} />)
  ) : (
    <p>No Contacts found</p>
  );
}

export default ListData;

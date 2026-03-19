import { useContext, useMemo, useState } from "react";
import AppContext from "../components/context/AppContext";
import ListItem from "./ListItem";

function ListData() {
  console.log("List Data is running");
  const { state } = useContext(AppContext);

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

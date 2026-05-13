import { createContext, useReducer, useState } from "react";

const AppContext = createContext();

const initialState = {
  search: "",
  students: [
    {
      id: "1",
      name: "Arun",
      contact: 9876543210,
      education: "tech",
      skills: ["HTML", "CSS"],
      course: "Mern",
    },
    {
      id: "2",
      name: "Meera",
      contact: 9123456780,
      education: "tech",
      skills: ["HTML", "JAVASCRIPT"],
      course: "Mern",
    },
    {
      id: "3",
      name: "Rahul",
      contact: 9988776655,
      education: "non-tech",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      course: "React",
    },
    {
      id: "4",
      name: "Anjali",
      contact: 9090909090,
      education: "non-tech",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      course: "Python",
    },
    {
      id: "5",
      name: "Vikram",
      contact: 9345678123,
      education: "tech",
      skills: ["CSS", "JAVASCRIPT"],
      course: "React",
    },
    {
      id: "6",
      name: "Sneha",
      contact: 9765432101,
      education: "non-tech",
      skills: ["HTML", "CSS"],
      course: "Mern",
    },
  ],
  findStudent: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        students: [...state.students, action.payload],
      };

    case "edit":
      return {
        ...state,
        students: state.students?.map((student) =>
          student?.id === action.payload?.id ? action.payload : student,
        ),
      };

    case "delete":
      return {
        ...state,
        students: state?.students?.filter(
          (student) => student?.id !== action.payload,
        ),
      };
    case "find-student":
      return {
        ...state,
        findStudent: state?.students?.find(
          (student) => student?.id === action.payload,
        ),
      };
    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  // console.log("app-provider is running");

  const [state, dispatch] = useReducer(reducer, initialState);

  const [searchValue, setSearchValue] = useState("");
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

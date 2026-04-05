import { createContext, useReducer, useState } from "react";

const AppContext = createContext();

const initialState = {
  search: "",
  students: [
    {
      name: "Arun",
      contact: 9876543210,
      education: "B.Tech",
      skills: ["html", "css"],
      course: "react",
    },
    {
      name: "Meera",
      contact: 9123456780,
      education: "MCA",
      skills: ["javascript", "react"],
      course: "mern",
    },
    {
      name: "Rahul",
      contact: 9988776655,
      education: "B.Sc",
      skills: ["python", "sql"],
      course: "python",
    },
    {
      name: "Anjali",
      contact: 9090909090,
      education: "BCA",
      skills: ["html", "css", "javascript"],
      course: "react",
    },
    {
      name: "Vikram",
      contact: 9345678123,
      education: "Diploma",
      skills: ["css", "bootstrap"],
      course: "frontend",
    },
    {
      name: "Sneha",
      contact: 9765432101,
      education: "B.Tech",
      skills: ["node", "express", "mongodb"],
      course: "mern",
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        students: [...state.students, action.payload],
      };

    case "delete":
      return {
        ...state,
        students: state?.students?.filter(
          (student) => student?.id !== action.payload,
        ),
      };
    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  // console.log("app-provider is running");

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

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

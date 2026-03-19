import { createContext, useRef, useEffect, useState, useReducer } from "react";

const AppContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        students: [...state.students, action.payload].sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        ),
      };

    case "delete":
      return {
        ...state,
        students: state?.students?.filter(
          (student) => student?.id !== action.payload,
        ),
      };

    case "search":
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  console.log("app-provider is running");

  const initialState = {
    search: "",
    students: [
      { id: 1, name: "Bivin", contact: 9400030603 },
      { id: 2, name: "Sheethal", contact: 9400075849 },
      { id: 3, name: "Ashish", contact: 9876543210 },
      { id: 4, name: "Anjali", contact: 9123456789 },
      { id: 5, name: "Rahul", contact: 9898989898 },
      { id: 6, name: "Neha", contact: 9765432101 },
      { id: 7, name: "Arjun", contact: 9345678123 },
      { id: 8, name: "Sneha", contact: 9988776655 },
      { id: 9, name: "Vivek", contact: 9012345678 },
      { id: 10, name: "Priya", contact: 9654321876 },
    ].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())),
  };

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

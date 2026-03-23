import { createContext, useRef, useEffect, useState, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  search: "",
  students: [
    { id: 1, name: "Bivin", contact: 9400030603 },
    { id: 2, name: "Sheethal", contact: 9400075849 },
    { id: 3, name: "Ashish", contact: 9876543210 },
  ].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())),
};

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

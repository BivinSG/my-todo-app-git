const initialState = {
  search: "",
  students: [
    { id: 1, name: "Bivin", contact: 9400030603 },
    { id: 2, name: "Sheethal", contact: 9400075849 },
    { id: 3, name: "Ashish", contact: 9876543210 },
  ].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())),
};

const appReducer = (state = initialState, action) => {
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
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;

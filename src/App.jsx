import { createContext, useContext } from "react";
import "./App.css";
import ListData from "./student-list Components/ListData";
import ListInput from "./student-list Components/ListInput";

export const dummyContext = createContext();

function App() {
  // console.log("App is running");

  return (
    <dummyContext.Provider value={{ dummyValue: "Hello Bivin" }}>
      <div className="app-container">
        <div className="list-input-container">
          <ListInput />
        </div>

        <div className="contacts">
          <ListData />
        </div>
      </div>
    </dummyContext.Provider>
  );
}

export default App;

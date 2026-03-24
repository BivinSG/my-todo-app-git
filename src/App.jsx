import { createContext, useContext } from "react";
import "./App.css";
import ListData from "./student-list Components/ListData";
import ListInput from "./student-list Components/ListInput";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="list-input-container">
          <ListInput />
        </div>

        <div className="contacts">
          <ListData />
        </div>
      </div>
    </>
  );
}

export default App;

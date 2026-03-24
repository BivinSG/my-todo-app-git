import "./App.css";
import ListData from "./student-list Components/ListData";
import ListInput from "./student-list Components/ListInput";

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









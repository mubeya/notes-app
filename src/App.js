import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Notes from "./Components/Notes";
import Form from "./Components/Form";

function App() {
  return (
    <div className='App'>
      <h1 className='header'>keep note</h1>
      <div>
        <Form />
        <Notes />
      </div>
    </div>
  );
}

export default App;

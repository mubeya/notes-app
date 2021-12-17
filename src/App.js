import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Notes from "./Components/Notes";
import Form from "./Components/Form";
import Header from "./Components/Header";
import { keepTheme } from "./theme";

function App() {
  useEffect(() => {
    keepTheme();
  });

  return (
    <div className='App'>
      <Header />
      <div>
        <Form />
        <Notes />
      </div>
    </div>
  );
}

export default App;

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Select from "./components/pages/Select";
import AddData from "./components/pages/AddData";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/select" Component={Select} />
          <Route path="/addData" Component={AddData} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
